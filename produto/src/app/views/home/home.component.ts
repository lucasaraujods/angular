import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public titulo!: string;
  public texto!: string;
  public tituloDestaque!: string;
  public textoDestaque!: string;

  constructor() { }

  ngOnInit() {
    this.titulo! = 'Venha conhecer nosso diferencial';
    this.texto! = 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos.';
    this.tituloDestaque! = 'Quer tal conhecer nosso produto?';
    this.textoDestaque! = 'Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica.';
  }

  onSubmit(form: NgForm) {
    let dados = {
      Nome: `${form.value.nome}`,
      Email: `${form.value.email}`,
      Senha: `${form.value.password}`
    };
    console.log(dados);
  }
}
