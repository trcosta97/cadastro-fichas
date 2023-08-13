package br.com.thiago.fichasApi.domain.maquina;

import jakarta.validation.constraints.NotBlank;

public record CadastrarMaquinaDTO(
        @NotBlank
        String nome,
        @NotBlank
        Setor setor) {
}
