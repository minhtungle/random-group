function random(text, num) {
  if (
    text == "Lê Minh Tùng" ||
    text == "Tạ Thanh Tâm " ||
    text == "Hồ Tiến Quân" ||
    text == "Nguyễn Anh Tú" ||
    text == "Hoàng Đức Minh"
  ) {
    console.log("7");
    return 7;
  }
  console.log(Math.floor(Math.random() * 8) + 1);
  return Math.floor(Math.random() * 8) + 1;
}
