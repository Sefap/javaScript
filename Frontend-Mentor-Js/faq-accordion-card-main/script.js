let questions = document.querySelectorAll('.question')
let icons = document.querySelectorAll('.icon')
console.log(questions);

questions.forEach((ques) => {
  ques.onclick = () => {
    const answer = ques.nextElementSibling;
    const isAnswerVisible = answer.style.display === 'block';
    console.log(isAnswerVisible);
    // Tüm cevapları gizle
    const allAnswers = document.querySelectorAll('.answer');
    allAnswers.forEach(a => a.style.display = 'none');
    // Tüm soru renklerini sıfırla
    questions.forEach(q => q.classList.remove('active'));

    // Tıklanan sorunun cevabını aç/kapat
    if (!isAnswerVisible) {
      answer.style.display = 'block';
      ques.classList.add('active')
    }
  };
});