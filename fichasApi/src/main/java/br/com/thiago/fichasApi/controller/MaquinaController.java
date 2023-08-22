package br.com.thiago.fichasApi.controller;

import br.com.thiago.fichasApi.domain.maquina.DadosCadastroMaquina;
import br.com.thiago.fichasApi.domain.maquina.Maquina;
import br.com.thiago.fichasApi.service.MaquinaService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@SecurityRequirement(name="bearer-key")
public class MaquinaController {

    @Autowired
    private MaquinaService maquinaService;

    @PostMapping("/maquina")
    public ResponseEntity<Maquina> cadastrarMaquina(@RequestBody @Valid DadosCadastroMaquina data, UriComponentsBuilder uriBuilder){
        var newMaquina = new Maquina(data);
        Maquina savedMaquina = maquinaService.save(newMaquina);
        var uri = uriBuilder.path("/maquina/{id}").buildAndExpand(savedMaquina.getId()).toUri();
        return ResponseEntity.created(uri).body(savedMaquina);
    }

}
