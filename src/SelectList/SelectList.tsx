import React from 'react';
import Loading from './../components/loading/loading';
import question from './../components/images/question.svg'

export default function SelectList(props:any) {
  const [array, setArray ] = React.useState< userData[] >([ ]);
  // let array = ['text','text','text','text','text'];
  interface  userData {
    id: number,
    name: string,
    image?: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
  };

  interface useImage{
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
  }


  if ( array.length <= 0 ) {   
    fetchUser();
  } 

  async function fetchUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        fetchIcons(data);
      });
  }

  async function fetchIcons( data_user : userData []) {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        return response.json();
      })
      .then((data_img) => {
        concatUsersAndPhoto(data_img, data_user)
      });
  }

  function concatUsersAndPhoto(data_img: useImage[], data_user: userData[]){
    data_user.forEach( user  => {
      var img = data_img.find(img => img.id === user.id);
      user.image = img?.url;
    });
    setArray(data_user);
  }
    
  const handleClickOnRow = (e:string) => (  ) => {
    props.setInputValue(e);
    props.setSelectedData(true);
  }
      
  return (
    <div className='select_list'>
      <div className='table_list'>
        { array.length > 0  ? 
          array.map(( item, index ) => (  
            <div key={ item.id } className='user_table_row' onClick={handleClickOnRow(item.name)}>

              <div className='icon_div'>
                <div className='div_user_icon'>
                  <img className='user_icon'  role="img" src={ item.image ? item.image : question } />
                </div>
              </div>

              <div className='user_name'>
                <p className='user_title'>
                  { item.name }
                </p>
                <p className='user_text'>
                  @{ item.username.toLowerCase() }
                </p> 
              </div>

            </div>
          ))
        :
          <Loading/>
        }
      </div>
    </div>
  );
}