import { Component, OnInit } from '@angular/core';
import { GetCategoriasService } from 'src/app/core/api/services/categorias/get-categorias.service';
import { ICategoria } from 'src/app/core/api/models/i-categoria';
import { IParams } from 'src/app/core/api/models/i-params';
import { GetVideosService } from 'src/app/core/api/services/videos/get-videos.service';
import { IVideos } from 'src/app/core/api/models/i-video';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categoriasList: ICategoria[];
  nro_categoria: number;
  string_busqueda: string;
  videosList: IVideos[];

  constructor( private categoriaService: GetCategoriasService, private videosService: GetVideosService ) { }
  private data: IParams = {
    nro_categoria: this.nro_categoria,
    string_busqueda: this.string_busqueda
  };

  ngOnInit() {
  this.categoriaService.getCategorias().then((categorias: ICategoria[]) => {
      this.categoriasList = categorias;
      console.log(categorias);
    });
  }
  buscar() {
    this.data = {
      nro_categoria: this.nro_categoria,
      string_busqueda: this.string_busqueda
    };

    this.videosService.get_videos(this.data).then((videos: IVideos[]) => {
      this.videosList = videos;
    });
  }

}
