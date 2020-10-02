import { Component } from '@angular/core';

@Component({
  selector: 'app-centro',
  templateUrl: './centro.component.html',
  styleUrls: ['./centro.component.css']
})
export class CentroComponent {

  obterBackground(){

    return ['background'];

  }

  obterTitleParameters(){

    return ['titleParameters'];

  }

  obterDescricao(){

    return ['descricao'];

  }

}
