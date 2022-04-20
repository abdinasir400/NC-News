import { useEffect, useState } from "react";


const ListOfArticles = () => {
    useEffect(() => {
        fetch('https://nc-news-abdinasirm.herokuapp.com/api/articles')
        .then((response) => response.json())
        .then((body)=>setArticles(body.articles));

        
      }, []);

      const [listOfArticles,setArticles] = useState([])
      
    return (
      <section>
        <h1> List of Articles</h1>
        <div className="articles" >
        <ul >
            {listOfArticles.map((article)=>{
                return <li key={article.title}> <h4> {article.title}  </h4> Votes :  {article.votes}   </li>

            })}
        </ul>
        </div>  
      </section>
      
    );
  };

  export default ListOfArticles