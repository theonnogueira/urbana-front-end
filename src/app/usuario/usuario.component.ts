import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';
import { Cartao } from '../model/Cartao';
import { CartaoService } from '../service/cartao.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  usuario: Usuario = new Usuario();
  listaUsuarios: Usuario[];

  constructor(private router: Router, private usuarioService: UsuarioService) {}

  ngOnInit() {
    if (environment.token == '') {
      alert('Usuário deslogado, faça o login novamente');
      this.router.navigate(['/entrar']);
    }

    this.findAllUsuarios();
  }

  findAllUsuarios() {
    this.usuarioService.getAllUsuario().subscribe((resposta: Usuario[]) => {
      this.listaUsuarios = resposta;
    });
  }

  cadastrar() {
    this.usuarioService
      .postUsuario(this.usuario)
      .subscribe((resposta: Usuario) => {
        this.usuario = resposta;
        console.log(resposta);
        alert('Usuário cadastrado com sucesso!');
        this.usuario = new Usuario();
        this.router.navigate(['/inicio']);
      });
  }
}
