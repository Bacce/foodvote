export const generateColor = (text: string) => {
  const convertLetterToNumber = (str: string) => {
    let out = 0;
    let len = str.length;
    for (let pos = 0; pos < len; pos++) {
      out += (str.charCodeAt(pos) - 64) * Math.pow(26, len - pos - 1);
    }
    console.log(out);
    return out;
  };

  return Math.floor(
    Math.abs(Math.sin(convertLetterToNumber(text)) * 16777215)
  ).toString(16);
}