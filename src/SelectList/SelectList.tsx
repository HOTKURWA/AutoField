import React from 'react';
import Loading from './../components/loading/loading';
import question from './../components/images/question.svg'
import './SelectList.css'
import { IUserData , IUseImage }  from '../components/interfaces/ISelectList'
import {fetchUser, fetchIcons} from '../components/requests/request'


export default function SelectList(props:any) {
  const [array, setArray ] = React.useState< IUserData[] >([ ]);

  // async Requests to get & concat data from server
  const fetchAllEmployees = async () => {
    const user_data: IUserData[] = await fetchUser();
    const data_img: IUseImage[] = await fetchIcons();
    concatUsersAndPhoto(user_data, data_img);
  }

  // Simple check of empty data
  if ( array.length <= 0 ) {   
    fetchAllEmployees();
  } 

  // Concating user and image data by id
  function concatUsersAndPhoto( data_user: IUserData[], data_img: IUseImage[]):void {
    data_user.forEach( user  => {
      var img = data_img.find(img => img.id === user.id);
      user.image = img?.url;
    });
    setArray(data_user);
  }

  // Row click event
  const handleClickOnRow = (e:string) => (  ) => {
    props.setInputValue(e);
    props.setSelectedData(true);
  }

  // 
  return (
    <div className='select_list'>
      <div className='table_list'>
        { array.length > 0  ? 

          array.map(( item ) => (  
            <div key={ item.id } className='user_table_row' onClick={handleClickOnRow(item.name)}>

              <div className='icon_div'>
                <div>
                  <img src={ item.image }  alt={ question }/>
                </div>
              </div>

              <div className='user_div'>
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
          <div className='loading_div'>
            <Loading/>
          </div>
        }

      </div>
    </div>
  );
}