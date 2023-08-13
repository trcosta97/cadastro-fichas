package br.com.thiago.fichasApi.controller;

import br.com.thiago.fichasApi.domain.ficha.CadastrarFichaDTO;
import br.com.thiago.fichasApi.domain.ficha.Ficha;
import br.com.thiago.fichasApi.domain.maquina.Maquina;
import br.com.thiago.fichasApi.domain.usuario.Usuario;
import br.com.thiago.fichasApi.service.FichaService;
import br.com.thiago.fichasApi.service.MaquinaService;
import br.com.thiago.fichasApi.service.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@RestController
public class FichaController {

    @Autowired
    private FichaService fichaService;

    @Autowired
    private MaquinaService maquinaService;

    @Autowired
    private UsuarioService usuarioService;


    @PostMapping("/ficha")
    public ResponseEntity<Ficha> cadastrarFicha(@RequestBody @Valid CadastrarFichaDTO data, UriComponentsBuilder uriBuilder){
        var newFicha = new Ficha(data);
        Usuario usuario = usuarioService.getById(data.autor().id());
        Maquina maquina = maquinaService.getById(data.autor().id());

        newFicha.setAutor(usuario);
        newFicha.setMaquina(maquina);

        Ficha savedFicha = fichaService.save(newFicha);
        var uri = uriBuilder.path("/ficha/{id}").buildAndExpand(savedFicha.getId()).toUri();
        return ResponseEntity.created(uri).body(savedFicha);
    }

    @GetMapping("/ficha/{id}")
    public ResponseEntity<Ficha> getFichaById(@PathVariable Long id){
        var foundFicha = fichaService.getFichaById(id);
        if (foundFicha != null){
            return ResponseEntity.ok(foundFicha);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/ficha/all")
    public ResponseEntity<List<Ficha>> getAllFichas(){
        List<Ficha> fichas = fichaService.getAll();
        return ResponseEntity.ok(fichas);
    }

}