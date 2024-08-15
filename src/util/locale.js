const es = function() {
    const langName = 'Hindi';
    const monthFullName = [
      'जनवरी',
      'फ़रवरी',
      'मार्च',
      'अप्रैल',
      'मई',
      'जून',
      'जुलाई',
      'अगस्त',
      'सितंबर',
      'अक्टूबर',
      'नवंबर',
      'दिसंबर',
    ];
    const shortName = ['जन', 'फ़र', 'मार्च', 'अप्रै', 'मई', 'जून', 'जुला', 'अगस्त', 'सितं', 'अक्टू', 'नवं', 'दिसं'];
    const days = ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'];
    const daysNames = ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'];
    const rtl = false;
    const ymd = false;
    const yearSuffix = '';
    return {
      months: monthFullName,
      monthsAbbr: shortName,
      days: days,
      language: langName,
      yearSuffix: yearSuffix,
      ymd: ymd,
      rtl: rtl,
      langName: langName,
      daysNames: daysNames,
    };
  };
  
  export const data = {
    es: es()
  };
  