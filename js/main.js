//
setTermData(data);

//
//
//

function setTermData(data) {
  const params = new URLSearchParams(window.location.search);
  termId = params.get("id") || 1;
  if (termId > data.length) {
    document.getElementById("content").innerHTML = `
    <h1 
      style ="font-size: 3em;color: #fff;padding: 1em;border-radius: 1em;background: #bd0000;direction: rtl;text-align: center;"
    >
      تحذير: خطا فى رقم الفصل الدراسى !!!
    </h1>`;
    return;
  }
  term = data[--termId];

  document.getElementById("page-head").innerHTML = term.name;

  subjects = term.subjects;

  subjects.forEach((subject) => {
    setSubjectData(subject);
  });
}

function setSubjectData(subject) {
  let bookStatus = `"`;
  let vedioStatus = `"`;
  let examsStatus = `"`;

  subject.dataUrl
    ? (bookStatus = `" href="${subject.dataUrl}" `)
    : (bookStatus = ` not-available"`);

  subject.videoUrl
    ? (vedioStatus = `" href="${subject.videoUrl}" `)
    : (vedioStatus = ` not-available"`);

  subject.examsUrl
    ? (examsStatus = `" href="${subject.examsUrl}" `)
    : (examsStatus = ` not-available"`);

  const card = `
  <div class="card">
    <div class="info">
      <h3>${subject.name}</h3>
      <hr>
      <div class="subjects">
        <a class="my-btn${bookStatus}>الملازم والكتب</a>
        <a class="my-btn${vedioStatus}>الفيديوهات</a>
        <a class="my-btn${examsStatus}>الأمتحانات</a>
      </div>
    </div>
  </div>
  `;

  document.getElementById("content").innerHTML += card;
}
