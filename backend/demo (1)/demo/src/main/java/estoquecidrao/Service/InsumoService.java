package estoquecidrao.Service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import estoquecidrao.Model.Insumo;
import estoquecidrao.Repository.InsumoRepository;


@Service  // Indica que essa classe é um serviço que contém a lógica de negócio
public class InsumoService {

    @Autowired
    private InsumoRepository insumoRepository;


    public Insumo salvar(Insumo insumo) throws Exception {
        validarInsumo(insumo); // Chama o método de validação
        return insumoRepository.save(insumo);
    
    }

    public void validarInsumo(Insumo insumo)throws Exception{

        // tratamento de valores invalidos ou null

        if (insumo.getDataEntrada() == null){
            throw new IllegalArgumentException("O campo data de entrada não pode ser null");
        }

        if (insumo.getDataSaida() != null && insumo.getDataSaida().isBefore(insumo.getDataEntrada())) {
            throw new IllegalArgumentException("A data de saída não pode ser anterior à data de entrada");
        }
        //if (insumo.getDataSaida() == null){
           // throw new IllegalArgumentException("O campo data de saida não pode ser null");//
            

       // }

        if(insumo.getDataValidade() == null){
            throw new IllegalArgumentException("O campo data de validade não pode ser null");
            
        }
        if (insumo.getQuantidade()<1){
            throw new IllegalArgumentException("O valor não pode ser negativo");

        }
      if(insumo.getNome() == null){
            throw new IllegalArgumentException ("não pode ser null");
      }

       if (insumo.getDescricao()==null){
        throw new IllegalArgumentException("não pode ser null");
       }
       
          
    } 

    // Retorna insumos com data de validade próxima (por exemplo, dentro dos próximos 7 dias)
    public List<Insumo> verificarInsumosParaVencer() {
        LocalDate hoje = LocalDate.now();
        LocalDate dataLimite = hoje.plusDays(7); // Limite de 7 dias para expirar
        // Retorna insumos cuja data de validade seja menor ou igual a dataLimite.
        // Assim, insumos já vencidos (antes de hoje) também serão incluídos.
        return insumoRepository.findByDataValidadeLessThanEqual(dataLimite);
    }
    
    // Retorna insumos com estoque abaixo de um limite (por exemplo, 10 unidades)
 public List<Insumo> verificarEstoqueBaixo() {
        int limiteEstoque = 10;
        return insumoRepository.findByQuantidadeLessThan(limiteEstoque);
    }
    
}


        
        

    // Retorna lista de insumos com estoque baixo (quantidade menor que 10)
    // public List<Insumo> verificarEstoqueBaixo() {
    //     return insumoRepository.findByQuantidadeLessThan(10);
    // }

    // Retorna lista de insumos vencidos
    // public List<Insumo> verificarInsumosVencidos() {
    //     return insumoRepository.findByDataValidadeBefore(LocalDate.now());
    // }

    // // Adiciona quantidade ao estoque de um insumo existente
    // public Insumo registrarEntrada(String codigo, int quantidade) {
    //     Insumo insumo = insumoRepository.findByCodigo(codigo);
        
    //     if (insumo != null) {
    //         insumo.setQuantidade(insumo.getQuantidade() + quantidade);
    //         insumo.setDataEntrada(LocalDate.now()); // Atualiza a data de entrada
    //         return insumoRepository.save(insumo);
    //     }
    //     return null; // Retorna null se o insumo não for encontrado
    // }

    // Reduz a quantidade de um insumo no estoque



