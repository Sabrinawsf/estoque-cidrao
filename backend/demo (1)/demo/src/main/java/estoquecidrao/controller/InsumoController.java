package estoquecidrao.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import estoquecidrao.Model.Insumo;
import estoquecidrao.Repository.InsumoRepository;
import estoquecidrao.Service.InsumoService;
import jakarta.validation.Valid;




@RequestMapping("/insumos")  // Define o endpoint base para acessar os recursos de insumos
@RestController  // Define que esta classe será um controlador REST
@CrossOrigin(origins = "*")
public class InsumoController {

  @Autowired
  private InsumoRepository insumoRepository;

   
    @Autowired //usada para injeção de dependência. Permite que o Spring gerencie e forneça as instâncias necessárias para a sua classe de forma automática.
    private InsumoService insumoService;

    @GetMapping("/teste")
    public String testando () {
        return "aplicação funcionando";
    }

    // Retorna todos os insumos cadastrados
    @GetMapping
    public List<Insumo> listar() {
        return insumoRepository.findAll();
    }

    // Salva um novo insumo no banco de dados
    @PostMapping
    public ResponseEntity<Object> salvar(@RequestBody @Valid Insumo insumo) throws Exception {

        try {Insumo novoInsumo = insumoService.salvar(insumo);
            return ResponseEntity.ok(novoInsumo);
            
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        
    }
    // Remove um insumo pelo ID
    @DeleteMapping("/{id}")
    public ResponseEntity<String> remover (@PathVariable ("id") Long id) throws  Exception{
       Optional<Insumo> obj = insumoRepository.findById(id);

       if (obj.isPresent()) {
            insumoRepository.deleteById(id);
            return ResponseEntity.ok("Insumo deletado com sucesso");

        }else {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/{id}")
public ResponseEntity<?> atualizar(@PathVariable("id") Long id, @RequestBody @Valid Insumo insumoAtualizado) {
    Optional<Insumo> optionalInsumo = insumoRepository.findById(id);

    if (optionalInsumo.isPresent()) {
        Insumo insumoExistente = optionalInsumo.get();

        // Atualiza os campos que você quiser
        insumoExistente.setNome(insumoAtualizado.getNome());
        insumoExistente.setDescricao(insumoAtualizado.getDescricao());
        insumoExistente.setQuantidade(insumoAtualizado.getQuantidade());
        insumoExistente.setDataEntrada(insumoAtualizado.getDataEntrada());
        insumoExistente.setDataValidade(insumoAtualizado.getDataValidade());
        insumoExistente.setDataSaida(insumoAtualizado.getDataSaida());

        insumoRepository.save(insumoExistente);

        // Retorna o objeto atualizado como JSON
        return ResponseEntity.ok(insumoExistente);
    } else {
        return ResponseEntity.notFound().build();
    }
}
           
       
       @GetMapping("/alertas")
       public ResponseEntity<List<Insumo>> estoqueBaixo() {
           List<Insumo> insumosBaixos = insumoService.verificarEstoqueBaixo();
           return ResponseEntity.ok(insumosBaixos);
       }
   
       // Endpoint para buscar insumos que estão para vencer (expirar em breve)
       @GetMapping("/vencer")
       public ResponseEntity<List<Insumo>> insumosParaVencer() {
        
           List<Insumo> insumosVencer = insumoService.verificarInsumosParaVencer();
           return ResponseEntity.ok(insumosVencer);
       }
   }
    // // Retorna lista de insumos com estoque baixo
    // @GetMapping("/alertas")
    // public List<Insumo> estoqueBaixo() {
    //     return insumoService.verificarEstoqueBaixo();
    // }

    // // Retorna lista de insumos vencidos
    // @GetMapping("/vencidos")
    // public List<Insumo> insumosVencidos() {
    //     return insumoService.verificarInsumosVencidos();
    // }

    // Registra a entrada de insumos no estoque
    // @PutMapping("/entrada/{codigo}/{quantidade}")
    // public Insumo entrada(@PathVariable String codigo, @PathVariable int quantidade) {
    //     return insumoService.registrarEntrada(codigo, quantidade);
    // }

    // // Registra a saída de insumos do estoque
    // @PutMapping("/saida/{codigo}/{quantidade}")
    // public Insumo saida(@PathVariable String codigo, @PathVariable int quantidade) {
    //     return insumoService.registrarSaida(codigo, quantidade);
    

