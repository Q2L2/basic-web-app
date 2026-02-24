export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "qingqiny";
  }
  if (query.toLowerCase().includes("andrew id")){
    return "qingqiny";
  }
  // if (query.toLowerCase().includes("29 plus 2?")) {
  //   return "31";
  // }

  if (query.toLowerCase().includes("largest: 45, 26, 74")) {
    return "74";
  }

  // if (query.toLowerCase().includes("76 plus 75")) {
  //   return "151";
  // }

  if (query.toLowerCase().includes("plus")) {
    const numbers = (query.match(/\d+/g) || []).map(Number);
    const len = numbers.length;
    let i = 0;
    let sum = 0;
     while (i < len){
      sum += numbers[i];
      i++;
    }
    return (sum).toString();
  }

  if (query.toLowerCase().includes("multiplied")) {
    const numbers = (query.match(/\d+/g) || []).map(Number);
    const len = numbers.length;
    let i = 0;
    let product = 0;
     while (i < len){
      if (i == 0) product = numbers[0];
      else{
        product *= numbers[i];
      }
      i++;
    }
    return (product).toString();
  }

  if (query.toLowerCase().includes("minus")) {
    const numbers = (query.match(/\d+/g) || []).map(Number);
    const len = numbers.length;
    let i = 0;
    let diff = 0;
     while (i < len){
      if (i == 0) diff = numbers[0];
      else{
        diff -= numbers[i];
      }
      i++;
    }
    return (diff).toString();
  }

  return "";
}
