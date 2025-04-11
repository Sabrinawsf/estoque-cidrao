package estoquecidrao.Repository;

import java.time.LocalDate;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import estoquecidrao.Model.Insumo;

@Repository
public interface InsumoRepository extends JpaRepository<Insumo, Long> {

    // Busca insumos com quantidade menor que o valor informado
    List<Insumo> findByQuantidadeLessThan(int quantidade);

    // Busca insumos cuja data de validade esteja entre o início e o fim informados
    List<Insumo> findByDataValidadeBetween(LocalDate inicio, LocalDate fim);
    
    // Adicione esse método para retornar insumos cuja data de validade seja menor ou igual a dataLimite
    List<Insumo> findByDataValidadeLessThanEqual(LocalDate dataLimite);
}
