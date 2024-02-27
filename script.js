const categoryOptions = document.querySelector(".select-menu");
const selectButton = categoryOptions.querySelector(".select-btn");
const options = categoryOptions.querySelectorAll(".option");
const select_button_text = categoryOptions.querySelector(".select-btn-text");
const quoteText = document.getElementById("quote");


const categories = [
    { name: "Love",
      quotes: ["To love someone is nothing, to be loved by someone is something, to love someone who loves you is everything. -Bill Russell ",

        "Our culture says that feelings of love are the basis for actions of love. And of course that can be true. But it is truer to say that actions of love can lead consistently to feelings of love.   -Timothy Keller ",
        
        "Find me now. Before someone else does. -Haruki Murakami ",
        
        "One day you will ask me which is more important? My life or yours? I will say mine and you will walk away not knowing that you are my life.    -Khalil Gibran ",
        
        "Life is short. Kiss slowly, laugh insanely, love truly and forgive quickly.    -Paulo Coelho "]
    },
    {name: "Motivational",
      quotes: ["Failure is not fatal. Failure should be our teacher, not our undertaker. It should challenge us to new heights of accomplishments, not pull us to new depths of despair. From honest failure can come valuable experience.    -William Arthur Ward ",

        "From this day forward, I no longer shall tinker with the machinery of death. ... I fell morally and intellectually obligated simply to concede that the death penalty experiment has failed.   -Harry A. Blackmun ",
    
        "We must accept finite disappointment, but never lose infinite hope.    -Martin Luther King, Jr. ",
    
        "A man who wants to lead the orchestra must turn his back on the crowd. -Max Lucado ",
    
        "Trust in yourself. Your perceptions are often far more accurate than you are willing to believe.   -Claudia Black "
      ]
    },
  ];
  //Provide default value for select button and quote
select_button_text.innerHTML = categories[0].name;
quoteText.innerHTML = categories[0].quotes[0];

selectButton.addEventListener("click", () =>
  categoryOptions.classList.toggle("active")
);

options.forEach((option) => {
  option.addEventListener("click", () => {
    select_button_text.innerHTML =
      option.querySelector(".option-text").innerHTML;

    categoryOptions.classList.toggle("active");
  });
});
