let para=document.getElementById('para');
//check in console
para.addEventListener('mouseover',function run()
{
    console.log('mouse inside')
})

para.addEventListener('mouseout',function run()
{
    console.log('mouse now went outside')
})

para.addEventListener('mouseover',function run()
{
    alert('mouse inside')
})

para.addEventListener('mouseout',function run()
{
    alert('mouse now went outside')
})