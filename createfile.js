const fs = require('fs');

fs.readFile('file1.txt', 'utf8', (err1, data1) => {
  if (err1) throw err1;

fs.readFile('file2.txt', 'utf8', (err2, data2) => {
    if (err2) throw err2;

    const combinedData = data1 + data2;

    fs.writeFile('file3.txt', combinedData, 'utf8', (err3) => {
      if (err3) throw err3;
      console.log('Đã tạo file3.txt thành công');
    });
  });
});