let indentity = document.querySelector(`#section_main`);

indentity.insertAdjacentHTML(`beforeend`,`
<article>
<span>
<input type="email"> <button id="email_button">Email</button>
<input type="password"> <button id="password_button">Password</button>
</span>
</article>
` );




function PW_POST_FAILURE(){
    let output = document.querySelector(`#section_main`);

    output.insertAdjacentHTML(`beforeend`, `<h3>failure</h3>`);

};

function PW_POST_SUCCESS(response){

    let output = document.querySelector(`#section_main`);

    output.insertAdjacentHTML(`beforeend`, `<h3>SUCCCCCCESSSSSSS</h3>`);

    let pw_input = document.querySelector(`#password_button`);

    let pw_input_value = pw_input[`password`];

    console.log(pw_input_value);
};




function API_PW(){

    let pw_input = document.querySelector(`#password_button`);

    let pw_input_value = pw_input[`password`];


    axios({

        url:`https://reqres.in/api/login`,

        method: `POST`,

        data:{


            password: pw_input_value


        }


    }).then(PW_POST_SUCCESS).catch(PW_POST_FAILURE);


};

let pw_button = document.querySelector(`#password_button`);

pw_button.addEventListener(`click`, API_PW)