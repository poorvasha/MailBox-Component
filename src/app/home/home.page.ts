import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
content : any = [];
image: any;
name: any;
des: any;
id : any;
newID : any;
newObj : any;

constructor(public alertController: AlertController) {

}

ngOnInit() {

  // Array of objects to display mails
  this.content = [

    {id: 0, image: 1, name:  'Ramya', des: 'mental'},
    {id: 1, image: 1, name:  'yuva', des: 'mental'},
    {id: 2, image: 1, name:  'Musraf', des: 'mental'},

  ]

}



//  function to add new mail.
async addMail(){

  // to display alert prompt
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Prompt!',
    inputs: [
      {
        name: 'name',
        type: 'text',
        placeholder: 'Enter Name'
      },
      
      {
        name: 'paragraph',
        id: 'paragraph',
        type: 'textarea',
        placeholder: 'Add a Description'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: (alertData) => {

          // to store the increment of the ID value after adding new mail
          this.newID = (this.content[this.content.length-1].id)+1;

          // creating new object for new mail.
          this.newObj = {id : this.newID, image: 1, name : alertData.name, des : alertData.paragraph};

          // to push the newly created obj in array
          this.content.push(this.newObj);
        }
      }
    ]
  });

  await alert.present();
  }





}
