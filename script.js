const botao_conversao = document.getElementById("botao-conversao")
const select_moeda_estrangeira = document.getElementById("select-moeda-estrangeira")

const dolar = 5
const euro = 6
const bitcoin =  655352

function converter_valores() {
  const input_real = document.getElementById("input-real").value
  const valor_real_texto = document.getElementById("valor-real-texto")
  const valor_estrangeiro_texto = document.getElementById("valor-estrangeiro-texto")
  
  valor_real_texto.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(input_real)
  
  if (select_moeda_estrangeira.value === "US$ Dólar estadunidense") {
    valor_estrangeiro_texto.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(input_real / dolar)
  }
  
  if (select_moeda_estrangeira.value === "€ Euro") {
    valor_estrangeiro_texto.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(input_real / euro)
  }

  if (select_moeda_estrangeira.value === "Bitcoin") {
    valor_estrangeiro_texto.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
      minimumFractionDigits: 10,
    }).format(input_real / bitcoin.toFixed(19))
  }  
}

function mudar_moeda() {
  const moeda_nome = document.getElementById("moeda-nome")
  const bandeira_estrangeira = document.getElementById("bandeira-estrangeira")
  
  if (select_moeda_estrangeira.value === "€ Euro") {
    moeda_nome.innerHTML = "Euro"
    bandeira_estrangeira.src = "imagens/europa.png"
    
  } else if (select_moeda_estrangeira.value === "US$ Dólar estadunidense") {
    moeda_nome.innerHTML = "Dólar estadunidense"
    bandeira_estrangeira.src = "imagens/usa.png"

  } else if (select_moeda_estrangeira.value === "Bitcoin") {
    moeda_nome.innerHTML = "Bitcoin"
    bandeira_estrangeira.src = "imagens/bitcoin.png"
  }
  converter_valores()
}

select_moeda_estrangeira.addEventListener("change", mudar_moeda)
botao_conversao.addEventListener("click", converter_valores)