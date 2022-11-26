const accordian__header = document.getElementsByClassName("accordion__header");
//converting html collection to array and looping through it
Array.from(accordian__header).forEach((element) => {
  element.addEventListener("click", () => {
    //adding active class to the clicked element
    element.classList.toggle("active");
    //getting the next element of the clicked element
    let accordian__content = element.nextElementSibling;
    //if the next element is hide then visible it
    if (accordian__content.style.maxHeight) {
      accordian__content.style.maxHeight = null;
    } else {
      accordian__content.style.maxHeight =
        accordian__content.scrollHeight + "px";
    }
  });
});
