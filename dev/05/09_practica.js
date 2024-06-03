function solution(estudiantes, deathCount, nuevo) {

    while(deathCount > 0){
        estudiantes.pop()
        deathCount--;
    }
    console.log(estudiantes);
    estudiantes.push(nuevo);
    return estudiantes;
  }
  

  console.log(solution(["Nico", "Zule"], 0, "Santi"));
  console.log(solution(["Juan", "Juanita", "Daniela"], 1, "Julian"));
  console.log(solution(["Nath", "Luisa", "Noru"], 2, "Cami"));
