package estoquecidrao.Model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity  // Indica que esta classe será uma entidade no banco de dados
@Table(name="Insumos")
public class Insumo { 
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // Geração automática do ID
    private Long id;

     @NotNull
     @Column(name= "nome", nullable=false)
    private String nome;  // Nome do insumo (ex: Farinha)

    @NotNull
    @Column(name="descricao", nullable=false)
    private String descricao;  // Descrição detalhada (ex: Farinha de trigo 1kg)

    @NotNull
    @Min(value=1,message="a quantidade deve ser maior que zero")
    @Column(name="quantidade",nullable=false)
    private int quantidade;  // Quantidade em estoque

    @NotNull
    @Column(name= "data_entrada", nullable=false)
     private LocalDate dataEntrada;  // Data em que o insumo entrou no estoque

     @Column(name= "data_saida", nullable=false)
    private LocalDate dataSaida;  // Última data em que o insumo saiu do estoque
    
    @NotNull
     @Column(name= "data_validade", nullable=false)
    private LocalDate dataValidade;  // Data de vencimento do insumo

   
}



