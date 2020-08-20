import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IObjects } from '../../Interfaces/MailBoxInterface';
import { element } from 'protractor';
import { HomePageService } from '../services/home-page.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  // declarations
  content: Array<IObjects>;


  constructor(public alertController: AlertController,
              private homePageService: HomePageService) { }


  ngOnInit() {

    // Array of objects to display mails
    this.homePageService.mails().then((response) => {
      this.content = response;
    })
    .catch((err) => {
      console.log('error in getting mail from the storage');
    });


  }



  //  function to add new mail.
  async addMail() {

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
          name: 'des',
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

            // to display newly added mail
            this.content = this.homePageService.addMail(alertData);

          }
        }
      ]
    });

    await alert.present();
  }



  // funtion passed from child Component to delete mail.
  deleteMail(index): void {

    // splice method is used to delete object.
    // this.content.splice(this.content.indexOf(index), 1);

    // filter method is used to delete.
    this.content = this.homePageService.deleteMail(index);

  }


}
