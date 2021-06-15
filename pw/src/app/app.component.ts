import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password= '';
  lettersChecked = false;
  numsChecked = false;
  symChecked = false;
  length = 0;

  getUserNum(value: string) {
    let parsedValue = parseInt(value);

    if (!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }

  onLetters(){
    this.lettersChecked = !this.lettersChecked;
  }

  onNumbers(){
    this.numsChecked = !this.numsChecked;
  }

  onSymbols(){
    this.symChecked = !this.symChecked;
  }

  onButtonClick() {
      const numbers = '1234567890';
      const letters = 'abcdefghijklmnopqrstuvwxyz';
      const symbols = '!@#$%^&*';

      let validChars = '';

      if(this.lettersChecked) {
        validChars += letters;
      }
      if(this.numsChecked) {
        validChars += numbers;
      }
      if(this.symChecked) {
        validChars += symbols;
      }

      let generatePassword = '';
      for(let i = 0; i < this.length; i++ ){
        const index = Math.floor(Math.random() * validChars.length);
        generatePassword += validChars[index];
      }

    this.password = generatePassword;
  }
}
