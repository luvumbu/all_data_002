<style>
  /*
style par defaut 
  */
    :root {
    --blue: #788b56;
    --blue2: #deeec2;
    --white: #ffffff;
  }
      .a1{
        display: flex;
        justify-content: space-around;
        border-bottom: 5px solid var(--blue);
        flex-wrap: wrap;
    }
    .a1 div{
        padding:15px ; 
        width:14% ; 
        text-align: center;
    }
    .a1 div:hover{
       cursor:pointer ; 
       background-color: var(--blue);
       color:white ; 
    }
    .grande{
  
    background-color: var(--blue);
    color:white ; 
    text-align: center; 
  }
  .display_none{
    display: none;
  }
  
  .bgcolors{
      background-color: var(--blue); 
      color:white ; 
      text-align: center;
      padding: 10px;
      margin: 1px ; 
    }
  
    .bgcolors:hover{
      background-color:white ; 
      color: var(--blue);
      cursor: pointer;
    }
    #information_1{
      width:50%; 
      margin :auto ; 
      margin-top: 100px;
      height: 500px;
      overflow-y: scroll;
    }
 
</style>