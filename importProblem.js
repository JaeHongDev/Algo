import axios from "axios";
import cheerio from "cheerio";

const number = 42746;
const url = `https://programmers.co.kr/learn/courses/30/lessons/${number}`;

const init = () => {
  parseHtmlData( loadData())
};

const loadData = async () => {
  try {
    const getHtml = await axios.get(url);
    return getHtml;
  } catch (error) {
  }
};

const parseHtmlData = (html) =>{

  const $ = cheerio.load(html)
  console.log($("guide-section-description"))
}

init();
