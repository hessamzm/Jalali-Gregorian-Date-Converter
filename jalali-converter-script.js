const jalaali = {
  jalaaliMonthDays: [31,31,31,31,31,31,30,30,30,30,30,29],
  isLeapJalaaliYear: function(jy) {
    return this.jalaaliLeap(jy) === 0;
  },
jalaaliLeap: function(jy) {
  let breaks = [-61,9,38,199,426,686,756,818,1111,1181,1210,
  1635,2060,2097,2192,2262,2324,2394,2456,3178];
  let bl = breaks.length;
  let gy = jy + 621;
  let leapJ = -14;
  let jp = breaks[0];
  let jm, jump, n, i;
  if (jy < jp || jy >= breaks[bl-1])
    throw new Error('Invalid Jalaali year ' + jy);
  for (i=1; i < bl; i+=1) {
    jm = breaks[i];
    jump = jm - jp;
    if (jy < jm)
      break;
    leapJ = leapJ + parseInt(jump/33)*8 + parseInt((jump%33)/4);
    jp = jm;
  }
  n = jy - jp;
  leapJ = leapJ + parseInt(n/33)*8 + parseInt(((n%33)+3)/4);
  if ((jump % 33) === 4 && jump - n === 4)
    leapJ += 1;
  let leapValue = (((leapJ + 1) % 33) - 1);
  if (leapValue === -1)
    leapValue = 32;
  return leapValue;
},

  toGregorian: function(jy, jm, jd) {
    let gy = jy + 621;
    let leapJ = this.jalaaliLeap(jy);
    let leapG = this.gregorianLeap(gy);
    let march = this.jalaaliGregorianMarch(jy);
    let jdn1f = this.gregorianToJdn(gy, 3, march);
    let jdNo = (jm - 1) * 31 - Math.floor(jm / 7) * (jm - 7) + jd - 1;
    let gdn = jdn1f + jdNo;
    let g = this.jdnToGregorian(gdn);
    return g;
  },
  fromGregorian: function(gy, gm, gd) {
    let jdn = this.gregorianToJdn(gy, gm, gd);
    return this.jdnToJalaali(jdn);
  },
  gregorianLeap: function(gy) {
    return ((gy % 4 === 0) && (gy % 100 !== 0)) || (gy % 400 === 0);
  },
  gregorianToJdn: function(gy, gm, gd) {
    let a = Math.floor((14 - gm) / 12);
    let y = gy + 4800 - a;
    let m = gm + 12 * a - 3;
    let jdn = gd + Math.floor((153 * m + 2)/5) + 365*y + Math.floor(y/4) - Math.floor(y/100) + Math.floor(y/400) - 32045;
    return jdn;
  },
  jdnToGregorian: function(jdn) {
    let j = 4 * jdn + 139361631;
    j = j + Math.floor((Math.floor((4 * jdn + 183187720) / 146097)) * 3 / 4) * 4 - 3908;
    let i = Math.floor((j % 1461) / 4) * 5 + 308;
    let gd = Math.floor(i / 153) % 12 + 1;
    let gm = i % 153 % 5 + 1;
    let gy = Math.floor(j / 1461) - 100100 + Math.floor((8 - gm) / 6);
    return {gy, gm, gd};
  },
  jalaaliGregorianMarch: function(jy) {
    let breaks = [-61,9,38,199,426,686,756,818,1111,1181,1210,
      1635,2060,2097,2192,2262,2324,2394,2456,3178];
    let bl = breaks.length;
    let gy = jy + 621;
    let leapJ = -14;
    let jp = breaks[0];
    let jm, jump, leap, n, i;
    if (jy < jp || jy >= breaks[bl-1])
      throw new Error('Invalid Jalaali year ' + jy);
    for (i=1; i < bl; i+=1) {
      jm = breaks[i];
      jump = jm - jp;
      if (jy < jm)
        break;
      leapJ = leapJ + parseInt(jump/33)*8 + parseInt((jump%33)/4);
      jp = jm;
    }
    n = jy - jp;
    leapJ = leapJ + parseInt(n/33)*8 + parseInt(((n%33)+3)/4);
    if ((jump % 33) === 4 && jump - n === 4)
      leapJ += 1;
    let march = 20 + leapJ - ((gy % 4 === 0 && gy % 100 !== 0) || (gy % 400 === 0) ? 1 : 0);
    return march;
  },
  jdnToJalaali: function(jdn) {
    let gy = this.jdnToGregorian(jdn).gy;
    let jy = gy - 621;
    let r = this.jalaaliGregorianMarch(jy);
    let jdn1f = this.gregorianToJdn(gy, 3, r);
    let k = jdn - jdn1f;
    if (k >= 0) {
      if (k <= 185) {
        let jm = 1 + Math.floor(k / 31);
        let jd = (k % 31) + 1;
        return {jy, jm, jd};
      } else {
        k -= 186;
        let jm = 7 + Math.floor(k / 30);
        let jd = (k % 30) + 1;
        return {jy, jm, jd};
      }
    } else {
      jy -= 1;
      r = this.jalaaliGregorianMarch(jy);
      jdn1f = this.gregorianToJdn(gy - 1, 3, r);
      k = jdn - jdn1f;
      if (k <= 185) {
        let jm = 1 + Math.floor(k / 31);
        let jd = (k % 31) + 1;
        return {jy, jm, jd};
      } else {
        k -= 186;
        let jm = 7 + Math.floor(k / 30);
        let jd = (k % 30) + 1;
        return {jy, jm, jd};
      }
    }
  }
};

function padZero(num) {
  return num < 10 ? '0' + num : num;
}

document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('convertBtn');
  const resultDiv = document.getElementById('result');

  btn.addEventListener('click', function() {
    const y = parseInt(document.getElementById('yearInput').value, 10);
    const m = parseInt(document.getElementById('monthInput').value, 10);
    const d = parseInt(document.getElementById('dayInput').value, 10);
    const type = document.getElementById('dateType').value;

    resultDiv.textContent = '';

    if (!y || !m || !d) {
      resultDiv.textContent = 'لطفاً سال، ماه و روز را به درستی وارد کنید.';
      return;
    }
    if (m < 1 || m > 12) {
      resultDiv.textContent = 'ماه باید بین 1 تا 12 باشد.';
      return;
    }
    if (d < 1 || d > 31) {
      resultDiv.textContent = 'روز باید بین 1 تا 31 باشد.';
      return;
    }

    try {
      if (type === 'jalali') {
        const gDate = jalaali.toGregorian(y, m, d);
        resultDiv.textContent = `تاریخ میلادی: ${gDate.gy}-${padZero(gDate.gm)}-${padZero(gDate.gd)}`;
      } else {
        const jDate = jalaali.fromGregorian(y, m, d);
        resultDiv.textContent = `تاریخ شمسی: ${jDate.jy}/${padZero(jDate.jm)}/${padZero(jDate.jd)}`;
      }
    } catch (e) {
      resultDiv.textContent = 'خطا در تبدیل تاریخ: ' + e.message;
    }
  });
});
