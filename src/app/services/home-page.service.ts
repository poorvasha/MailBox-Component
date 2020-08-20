import { Injectable } from '@angular/core';
import { IObjects } from '../../Interfaces/MailBoxInterface';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  content: Array<IObjects>;

  constructor(private storage: Storage) { }

  // function returns Promise to display mails
  mails(): Promise<Array<IObjects>> {

    // Promise or async -> should wait until excecution
    return new Promise((resolve, reject) => {

        this.content = [];

        // Local Storage
        this.storage.get('name').then((val) => {

          if (val != null) {
            this.content = JSON.parse(val);
            resolve(this.content);
          }
          else {
            resolve(this.content);
          }

        })
        .catch((err) => {
          reject(err);
        });

    });

  }


  // function return object to add new mail
  addMail(alertData: IObjects): Array<IObjects> {

    let newID: number;

    // to store the increment of the ID value after adding new mail
    if (this.content.length === 0) {
      newID = 0;
    }
    else {
      newID = (this.content[this.content.length - 1].id) + 1;
    }

    // creating object for new mail.
    const newObj: IObjects = {
      id: newID,
      image: '1',
      name: alertData.name,
      des: alertData.des
    };

    // to push the newly created obj into array
    this.content.push(newObj);
    // to store newly added mail locally
    this.storage.set('name', JSON.stringify(this.content));

    return this.content;
  }


  // funtion returns object to delete the mails.
  deleteMail(index): Array<IObjects> {

    // filter method is used to delete.
    // tslint:disable-next-line: no-shadowed-variable
    this.content = this.content.filter(element => {
      return element.id !== index.id;
    });

    // to reset the objs after deleting
    this.storage.set('name', JSON.stringify(this.content));
    return this.content;
  }
}
