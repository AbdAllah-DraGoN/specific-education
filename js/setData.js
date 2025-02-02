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
  let dataStatus = `"`;

  subject.dataUrl
    ? (dataStatus = `" href="${subject.dataUrl}" target="_blank" `)
    : (dataStatus = ` not-available"`);

  const card = `
  <div class="card">
    <div class="info">
      <h3>${subject.name}</h3>
      <hr>
      <div class="subjects">
        <a class="my-btn${dataStatus}>الملازم والكتب والأمتحانات</a>
      </div>
    </div>
  </div>
  `;

  document.getElementById("content").innerHTML += card;
}
