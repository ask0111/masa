// fill in javascript code here


var form = document.querySelector("form");

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    var doct_name = document.querySelector('#name');
    var doct_id = document.querySelector("#docID");
    var doct_select = document.querySelector('#dept');
    var doct_exp = document.querySelector('#exp');
    var doct_email = document.querySelector('#email')
    var doct_mbl = document.querySelector('#mbl');

    // console.log(i);


    var trow = document.createElement('tr'); 
    var tdata1 = document.createElement('td');
    tdata1.innerText = doct_name.value;
    var tdata2 = document.createElement('td');
    tdata2.innerText = doct_id.value;
    var tdata3 = document.createElement('td');
    tdata3.innerText = doct_select.value;
    var tdata4 = document.createElement('td');
    tdata4.innerText = doct_exp.value;
    var tdata5 = document.createElement('td');
    tdata5.innerText = doct_email.value;
    var tdata6 = document.createElement('td');
    tdata6.innerText = doct_mbl.value;
    var tdata7 = document.createElement('td');
    if(doct_exp > 5){
        tdata7.innerText = 'Senior';
    }else if(doct_exp >1 && doct_exp < 6){
        tdata7.innerText = 'Junior';
    }else{
        tdata7.innerText = 'Trainee';
    }
    var tdata8 = document.createElement('button');
    tdata8.innerText = 'Delete';
    trow.append(tdata1, tdata2, tdata3, tdata4, tdata5, tdata6, tdata7, tdata8);
    trow.style.color = 'teal'
    tdata8.addEventListener('click', (e)=>{
        e.preventDefault();
        trow.remove(tdata1, tdata2, tdata3, tdata4, tdata5, tdata6, tdata7, tdata8);
    })
    document.querySelector('tbody').append(trow);

})