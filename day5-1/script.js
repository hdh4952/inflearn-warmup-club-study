const notice = document.getElementById('notice');
const bookContainer = document.getElementById('book-container');
const submitBtn = document.getElementById('submit-btn');

function addNotice(content) {
  const p = document.createElement('p');
  p.innerText = content;
  notice.appendChild(p);
  setTimeout(() => {
    notice.removeChild(p);
  }, 1000);
}

function addBook(title, author) {
  const bookRow = document.createElement('div');
  bookRow.className = 'book-container-row';

  const titleEl = document.createElement('div');
  titleEl.innerText = title;

  const authorEl = document.createElement('div');
  authorEl.innerText = author;

  const removeBtn = document.createElement('button');
  removeBtn.innerText = '❌';
  removeBtn.onclick = () => {
    bookContainer.removeChild(bookRow);
    addNotice('책이 삭제되었습니다.');
  };

  bookRow.appendChild(titleEl);
  bookRow.appendChild(authorEl);
  bookRow.appendChild(removeBtn);

  bookContainer.appendChild(bookRow);
}

function handleSubmit() {
  const title = document.getElementById('book-title');
  const author = document.getElementById('book-author');
  addBook(title.value, author.value);
  addNotice('책이 추가되었습니다.');
  title.value = '';
  author.value = '';
}

submitBtn.addEventListener('click', handleSubmit);
