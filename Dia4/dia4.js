function pulaLinha() {

		document.write("<br>");
		document.write("<br>");
	}

	function mostra(frase) {

		document.write(frase);
		pulaLinha();
	}

	var numeroPensado = Math.round(Math.random() * 10);

	var tentativas = 1;

	while(tentativas <=3) {
	
		var chute = parseInt(prompt("digite seu número"));

		if(chute == numeroPensado) {

			mostra("Você acertou, o número pensado era " + numeroPensado);
			break;

		} else {
			
			mostra("Você errou! ");

		}			
		
		tentativas++
	}

	mostra("Fim, o número pensado era " + numeroPensado);