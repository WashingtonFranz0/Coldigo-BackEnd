	package br.com.coldigogeladeiras.rest;


import java.sql.Connection;

import java.util.ArrayList;
import java.util.List;

import br.com.coldigogeladeiras.bd.Conexao;
import br.com.coldigogeladeiras.jdbc.JDBCMarcaDAO;
import br.com.coldigogeladeiras.modelo.Marca;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("marca")

public class MarcaRest extends UtilRest {
	@GET
	@Path("/buscar")
	@Produces(MediaType.APPLICATION_JSON)
	
	public Response buscar() {
		try {
			List<Marca> listaMarcas = new ArrayList<Marca>();

			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();
			JDBCMarcaDAO jdbcMarca = new JDBCMarcaDAO(conexao);
			listaMarcas = jdbcMarca.buscar();
			conec.fecharConexao();
			return this.buildResponse(listaMarcas);
		} catch (Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
	}
}