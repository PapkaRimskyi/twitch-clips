// Получение размеров всего документа(documentHeight), видимой части пользователем(userDocumentHeight), текущая прокрутка(currentScroll)

function getWindowProperty() {
  const documentHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight,
  );
  const userDocumentHeight = window.innerHeight;
  const currentScroll = window.pageYOffset;
  return { documentHeight, userDocumentHeight, currentScroll };
}

//

// Проверка, доскролил ли пользователь до конца документа

export function isUserScolledToEnd() {
  const { documentHeight, userDocumentHeight, currentScroll } = getWindowProperty();
  return documentHeight - userDocumentHeight === Math.round(currentScroll);
}

//

// Проверка, существует ли прокрутка на странице

export function isScrollButtonExist() {
  const { documentHeight, userDocumentHeight } = getWindowProperty();
  return documentHeight > userDocumentHeight;
}

//
