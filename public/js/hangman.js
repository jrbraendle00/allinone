const words4=["able", "acid", "aged", "also", "area", "army", "away", "baby", "back", "ball", "band", "bank", "base", "bath", "bear", "beat", "been", "beer", "bell", "belt", "best", "bill", "bird", "blow", "blue", "boat", "body", "bomb", "bond", "bone", "book", "boom", "born", "boss", "both", "bowl", "bulk", "burn", "bush", "busy", "call", "calm", "came", "camp", "card", "care", "case", "cash", "cast", "cell", "chat", "chip", "city", "club", "coal", "coat", "code", "cold", "come", "cook", "cool", "cope", "copy", "core", "cost", "crew", "crop", "dark", "data", "date", "dawn", "days", "dead", "deal", "dean", "dear", "debt", "deep", "deny", "desk", "dial", "dick", "diet", "disc", "disk", "does", "done", "door", "dose", "down", "draw", "drew", "drop", "drug", "dual", "duke", "dust", "duty", "each", "earn", "ease", "east", "easy", "edge", "else", "even", "ever", "evil", "exit", "face", "fact", "fail", "fair", "fall", "farm", "fast", "fate", "fear", "feed", "feel", "feet", "fell", "felt", "file", "fill", "film", "find", "fine", "fire", "firm", "fish", "five", "flat", "flow", "food", "foot", "ford", "form", "fort", "four", "free", "from", "fuel", "full", "fund", "gain", "game", "gate", "gave", "gear", "gene", "gift", "girl", "give", "glad", "goal", "goes", "gold", "Golf", "gone", "good", "gray", "grew", "grey", "grow", "gulf", "hair", "half", "hall", "hand", "hang", "hard", "harm", "hate", "have", "head", "hear", "heat", "held", "hell", "help", "here", "hero", "high", "hill", "hire", "hold", "hole", "holy", "home", "hope", "host", "hour", "huge", "hung", "hunt", "hurt", "idea", "inch", "into", "iron", "item", "jack", "jane", "jean", "john", "join", "jump", "jury", "just", "keen", "keep", "kent", "kept", "kick", "kill", "kind", "king", "knee", "knew", "know", "lack", "lady", "laid", "lake", "land", "lane", "last", "late", "lead", "left", "less", "life", "lift", "like", "line", "link", "list", "live", "load", "loan", "lock", "logo", "long", "look", "lord", "lose", "loss", "lost", "love", "luck", "made", "mail", "main", "make", "male", "many", "Mark", "mass", "matt", "meal", "mean", "meat", "meet", "menu", "mere", "mike", "mile", "milk", "mill", "mind", "mine", "miss", "mode", "mood", "moon", "more", "most", "move", "much", "must", "name", "navy", "near", "neck", "need", "news", "next", "nice", "nick", "nine", "nose", "note", "okay", "once", "only", "open", "oral", "over", "pace", "pack", "page", "paid", "pain", "pair", "palm", "park", "part", "pass", "past", "path", "peak", "pick", "pink", "pipe", "plan", "play", "plot", "plug", "plus", "poll", "pool", "poor", "port", "post", "pull", "pure", "push", "race", "rail", "rain", "rank", "rare", "rate", "read", "real", "rear", "rely", "rent", "rest", "rice", "rich", "ride", "ring", "rise", "risk", "roof", "room", "root", "rose", "rule", "rush", "ruth", "safe", "said", "sake", "sale", "salt", "same", "sand", "save", "seat", "seed", "seek", "seem", "seen", "self", "sell", "send", "sent", "sept", "ship", "shop", "shot", "show", "shut", "sick", "side", "sign", "site", "size", "skin", "slip", "slow", "snow", "soft", "soil", "sold", "sole", "some", "song", "soon", "sort", "soul", "spot", "star", "stay", "step", "stop", "such", "suit", "sure", "take", "tale", "talk", "tall", "tank", "tape", "task", "team", "tech", "tell", "tend", "term", "test", "text", "than", "that", "them", "then", "they", "thin", "this", "thus", "till", "time", "tiny", "told", "toll", "tone", "tony", "took", "tool", "tour", "town", "tree", "trip", "true", "tune", "turn", "twin", "type", "unit", "upon", "used", "user", "vary", "vast", "very", "vice", "view", "vote", "wage", "wait", "wake", "walk", "wall", "want", "ward", "warm", "wash", "wave", "ways", "weak", "wear", "week", "well", "went", "were", "west", "what", "when", "whom", "wide", "wife", "wild", "will", "wind", "wine", "wing", "wire", "wise", "wish", "with", "wood", "word", "wore", "work", "yard", "yeah", "year", "your", "zero", "zone"];
const words6=["abroad", "accept", "access", "across", "acting", "action", "active", "actual", "advice", "advise", "affect", "afford", "afraid", "agency", "agenda", "almost", "always", "amount", "animal", "annual", "answer", "anyone", "anyway", "appeal", "appear", "around", "arrive", "artist", "aspect", "assess", "assist", "assume", "attack", "attend", "august", "author", "avenue", "backed", "barely", "battle", "beauty", "became", "become", "before", "behalf", "behind", "belief", "belong", "berlin", "better", "beyond", "bishop", "border", "bottle", "bottom", "bought", "branch", "breath", "bridge", "bright", "broken", "budget", "burden", "bureau", "button", "camera", "cancer", "cannot", "carbon", "career", "castle", "casual", "caught", "center", "centre", "chance", "change", "charge", "choice", "choose", "chosen", "church", "circle", "client", "closed", "closer", "coffee", "column", "combat", "coming", "common", "comply", "copper", "corner", "costly", "county", "couple", "course", "covers", "create", "credit", "crisis", "custom", "damage", "danger", "dealer", "debate", "decade", "decide", "defeat", "defend", "define", "degree", "demand", "depend", "deputy", "desert", "design", "desire", "detail", "detect", "device", "differ", "dinner", "direct", "doctor", "dollar", "domain", "double", "driven", "driver", "during", "easily", "eating", "editor", "effect", "effort", "eighth", "either", "eleven", "emerge", "empire", "employ", "enable", "ending", "energy", "engage", "engine", "enough", "ensure", "entire", "entity", "equity", "escape", "estate", "ethnic", "exceed", "except", "excess", "expand", "expect", "expert", "export", "extend", "extent", "fabric", "facing", "factor", "failed", "fairly", "fallen", "family", "famous", "father", "fellow", "female", "figure", "filing", "finger", "finish", "fiscal", "flight", "flying", "follow", "forced", "forest", "forget", "formal", "format", "former", "foster", "fought", "fourth", "French", "friend", "future", "garden", "gather", "gender", "german", "global", "golden", "ground", "growth", "guilty", "handed", "handle", "happen", "hardly", "headed", "health", "height", "hidden", "holder", "honest", "impact", "import", "income", "indeed", "injury", "inside", "intend", "intent", "invest", "island", "itself", "jersey", "joseph", "junior", "killed", "labour", "latest", "latter", "launch", "lawyer", "leader", "league", "leaves", "legacy", "length", "lesson", "letter", "lights", "likely", "linked", "liquid", "listen", "little", "living", "losing", "lucent", "luxury", "mainly", "making", "manage", "manner", "manual", "margin", "marine", "marked", "market", "martin", "master", "matter", "mature", "medium", "member", "memory", "mental", "merely", "merger", "method", "middle", "miller", "mining", "minute", "mirror", "mobile", "modern", "modest", "module", "moment", "morris", "mostly", "mother", "motion", "moving", "murder", "museum", "mutual", "myself", "narrow", "nation", "native", "nature", "nearby", "nearly", "nights", "nobody", "normal", "notice", "notion", "number", "object", "obtain", "office", "offset", "online", "option", "orange", "origin", "output", "oxford", "packed", "palace", "parent", "partly", "patent", "people", "period", "permit", "person", "phrase", "picked", "planet", "player", "please", "plenty", "pocket", "police", "policy", "prefer", "pretty", "prince", "prison", "profit", "proper", "proven", "public", "pursue", "raised", "random", "rarely", "rather", "rating", "reader", "really", "reason", "recall", "recent", "record", "reduce", "reform", "regard", "regime", "region", "relate", "relief", "remain", "remote", "remove", "repair", "repeat", "replay", "report", "rescue", "resort", "result", "retail", "retain", "return", "reveal", "review", "reward", "riding", "rising", "robust", "ruling", "safety", "salary", "sample", "saving", "saying", "scheme", "school", "screen", "search", "season", "second", "secret", "sector", "secure", "seeing", "select", "seller", "senior", "series", "server", "settle", "severe", "sexual", "should", "signal", "signed", "silent", "silver", "simple", "simply", "single", "sister", "slight", "smooth", "social", "solely", "sought", "source", "soviet", "speech", "spirit", "spoken", "spread", "spring", "square", "stable", "status", "steady", "stolen", "strain", "stream", "street", "stress", "strict", "strike", "string", "strong", "struck", "studio", "submit", "sudden", "suffer", "summer", "summit", "supply", "surely", "survey", "switch", "symbol", "system", "taking", "talent", "target", "taught", "tenant", "tender", "tennis", "thanks", "theory", "thirty", "though", "threat", "thrown", "ticket", "timely", "timing", "tissue", "toward", "travel", "treaty", "trying", "twelve", "twenty", "unable", "unique", "united", "unless", "unlike", "update", "useful", "valley", "varied", "vendor", "versus", "victim", "vision", "visual", "volume", "walker", "wealth", "weekly", "weight", "wholly", "window", "winner", "winter", "within", "wonder", "worker", "wright", "writer", "yellow"];
const words8=["absolute", "abstract", "academic", "accepted", "accident", "accuracy", "accurate", "achieved", "acquired", "activity", "actually", "addition", "adequate", "adjacent", "adjusted", "advanced", "advisory", "advocate", "affected", "aircraft", "alliance", "although", "aluminum", "analysis", "announce", "anything", "anywhere", "apparent", "appendix", "approach", "approval", "argument", "artistic", "assembly", "assuming", "athletic", "attached", "attitude", "attorney", "audience", "autonomy", "aviation", "bachelor", "bacteria", "baseball", "bathroom", "becoming", "benjamin", "birthday", "boundary", "breaking", "breeding", "building", "bulletin", "business", "calendar", "campaign", "capacity", "casualty", "catching", "category", "Catholic", "cautious", "cellular", "ceremony", "chairman", "champion", "chemical", "children", "circular", "civilian", "clearing", "clinical", "clothing", "collapse", "colonial", "colorful", "commence", "commerce", "complain", "complete", "composed", "compound", "comprise", "computer", "conclude", "concrete", "conflict", "confused", "congress", "consider", "constant", "consumer", "continue", "contract", "contrary", "contrast", "convince", "corridor", "coverage", "covering", "creation", "creative", "criminal", "critical", "crossing", "cultural", "currency", "customer", "database", "daughter", "daylight", "deadline", "deciding", "decision", "decrease", "deferred", "definite", "delicate", "delivery", "describe", "designer", "detailed", "diabetes", "dialogue", "diameter", "directly", "director", "disabled", "disaster", "disclose", "discount", "discover", "disorder", "disposal", "distance", "distinct", "district", "dividend", "division", "doctrine", "document", "domestic", "dominant", "dominate", "doubtful", "dramatic", "dressing", "dropping", "duration", "dynamics", "earnings", "economic", "educated", "efficacy", "eighteen", "election", "electric", "eligible", "emerging", "emphasis", "employee", "endeavor", "engaging", "engineer", "enormous", "entirely", "entrance", "envelope", "equality", "equation", "estimate", "evaluate", "eventual", "everyday", "everyone", "evidence", "exchange", "exciting", "exercise", "explicit", "exposure", "extended", "external", "facility", "familiar", "featured", "feedback", "festival", "finished", "firewall", "flagship", "flexible", "floating", "football", "foothill", "forecast", "foremost", "formerly", "fourteen", "fraction", "franklin", "frequent", "friendly", "frontier", "function", "generate", "generous", "genomics", "goodwill", "governor", "graduate", "graphics", "grateful", "guardian", "guidance", "handling", "hardware", "heritage", "highland", "historic", "homeless", "homepage", "hospital", "humanity", "identify", "identity", "ideology", "imperial", "incident", "included", "increase", "indicate", "indirect", "industry", "informal", "informed", "inherent", "initiate", "innocent", "inspired", "instance", "integral", "intended", "interact", "interest", "interior", "internal", "interval", "intimate", "intranet", "invasion", "involved", "isolated", "judgment", "judicial", "junction", "keyboard", "landlord", "language", "laughter", "learning", "leverage", "lifetime", "lighting", "likewise", "limiting", "literary", "location", "magazine", "magnetic", "maintain", "majority", "marginal", "marriage", "material", "maturity", "maximize", "meantime", "measured", "medicine", "medieval", "memorial", "merchant", "midnight", "military", "minimize", "minister", "ministry", "minority", "mobility", "modeling", "moderate", "momentum", "monetary", "moreover", "mortgage", "mountain", "mounting", "movement", "multiple", "national", "negative", "nineteen", "northern", "notebook", "numerous", "observer", "occasion", "offering", "official", "offshore", "operator", "opponent", "opposite", "optimism", "optional", "ordinary", "organize", "original", "overcome", "overhead", "overseas", "overview", "painting", "parallel", "parental", "patented", "patience", "peaceful", "periodic", "personal", "persuade", "petition", "physical", "pipeline", "platform", "pleasant", "pleasure", "politics", "portable", "portrait", "position", "positive", "possible", "powerful", "practice", "precious", "pregnant", "presence", "preserve", "pressing", "pressure", "previous", "princess", "printing", "priority", "probable", "probably", "producer", "profound", "progress", "property", "proposal", "prospect", "protocol", "provided", "provider", "province", "publicly", "purchase", "pursuant", "quantity", "question", "rational", "reaction", "received", "receiver", "recovery", "regional", "register", "relation", "relative", "relevant", "reliable", "reliance", "religion", "remember", "renowned", "repeated", "reporter", "republic", "required", "research", "reserved", "resident", "resigned", "resource", "response", "restrict", "revision", "rigorous", "romantic", "sampling", "scenario", "schedule", "scrutiny", "seasonal", "secondly", "security", "sensible", "sentence", "separate", "sequence", "sergeant", "shipping", "shortage", "shoulder", "simplify", "situated", "slightly", "software", "solution", "somebody", "somewhat", "southern", "speaking", "specific", "spectrum", "sporting", "standard", "standing", "standout", "sterling", "straight", "strategy", "strength", "striking", "struggle", "stunning", "suburban", "suitable", "superior", "supposed", "surgical", "surprise", "survival", "sweeping", "swimming", "symbolic", "sympathy", "syndrome", "tactical", "tailored", "takeover", "tangible", "taxation", "taxpayer", "teaching", "tendency", "terminal", "terrible", "thinking", "thirteen", "thorough", "thousand", "together", "tomorrow", "touching", "tracking", "training", "transfer", "traveled", "treasury", "triangle", "tropical", "turnover", "ultimate", "umbrella", "universe", "unlawful", "unlikely", "valuable", "variable", "vertical", "victoria", "violence", "volatile", "warranty", "weakness", "weighted", "whatever", "whenever", "wherever", "wildlife", "wireless", "withdraw", "woodland", "workshop", "yourself"];
const alphabet=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var strikes,progress,solution;
const MAXSTRIKES=10;
    
var buttons=document.createElement("div");
document.getElementById("display").appendChild(buttons);
var display=document.createElement("p");
document.getElementById("display").appendChild(display);
var strikeCounter=document.createElement("p");
document.getElementById("display").appendChild(strikeCounter);

function hangman(){
    //settings for a new game
    progress="";
    display.innerHTML=progress;
    strikes=MAXSTRIKES;
    strikeCounter.innerHTML="Guesses Remaining: "+strikes;

    var dButtons=document.createElement("div");
    buttons.appendChild(dButtons);
    var gButtons=document.createElement("div");
    buttons.appendChild(gButtons);
    var canvas=document.createElement("canvas");
    canvas.width=400;
    canvas.height=400;
    document.getElementById("display").appendChild(canvas);

    //creating difficulty buttons
    var db1=document.createElement("button");
    db1.classList.add("dButton");
    db1.innerHTML="4 word letter";
    db1.onclick=function(){dbFunction(1)};
    dButtons.appendChild(db1);

    var db2=document.createElement("button");
    db2.classList.add("dButton");
    db2.innerHTML="6 word letter";
    db2.onclick=function(){dbFunction(2)};
    dButtons.appendChild(db2);

    var db3=document.createElement("button");
    db3.classList.add("dButton");
    db3.innerHTML="8 word letter";
    db3.onclick=function(){dbFunction(3)};
    dButtons.appendChild(db3);

    var db0=document.createElement("button");
    db0.classList.add("dButton");
    db0.innerHTML="custom word";
    db0.onclick=function(){dbFunction(0)};
    dButtons.appendChild(db0);

    //operation of difficulty buttons
    function dbFunction(q){
        switch(q){
            case 0:solution=prompt("Please input word to be guessed").toLowerCase();break;
            case 1:solution=words4[Math.floor(Math.random()*words4.length)];break;
            case 2:solution=words6[Math.floor(Math.random()*words6.length)];break;
            case 3:solution=words8[Math.floor(Math.random()*words8.length)];break;
        }        
        for(q=0;q<solution.length;q++)
            if(solution[q]==" ")
                progress+=" ";
            else
                progress+="_";
        display.innerHTML=progress;
        dButtons.remove();
        createGButtons();
        drawGuy(0);
    }

    //creating guess buttons
    function createGButtons(){
        for(q=0;q<alphabet.length;q++){
            var b=document.createElement("button");
            b.classList.add("gButton");
            b.innerHTML=alphabet[q];
            b.id=("gButton"+alphabet[q]);
            b.onclick=function(){guess(this.innerHTML)};
            gButtons.appendChild(b);
        }
    }

    //operation of guess buttons
    function guess(q){
        document.getElementById("gButton"+q).remove();
        if(solution.indexOf(q)!=-1){
            for(w=0;w<solution.length;w++)
                if(solution[w]==q)
                    if(w==0)
                        progress=q+progress.substr(1,progress.length);
                    else if(w==progress.length-1)
                        progress=progress.substr(0,progress.length-1)+q;
                    else
                        progress=progress.substr(0,w)+q+progress.substr(w+1,progress.length);
        }
        else
            strikes--;
            strikeCounter.innerHTML="Guesses Remaining: "+strikes;
        display.innerHTML=progress;
        checkStatus();
    }

    //determines when the game is over and whether the player has won or lost
    function checkStatus(){
        if(strikes==0|progress==solution){
            if(strikes==0)
                alert("You lost, better luck next time");
            else
                alert("Congratulations, you won");
            gButtons.remove();
            var rst=document.createElement("button");
            rst.classList.add("dButton");
            rst.innerHTML="reset";
            rst.onclick=function(){
                canvas.remove();
                rst.remove();
                hangman();
            }
            buttons.appendChild(rst);
        }
        drawGuy(MAXSTRIKES-strikes);
    }

    //draws the hangman
    function drawGuy(s){
        var q=canvas.getContext("2d");
        q.fillStyle="#FFFFFF";
        switch(s){
            case 0:q.fillRect(0,0,400,400);
                q.fillStyle="#000000";break;
            case 1:q.moveTo(25,375);
                q.lineTo(375,375);
                q.stroke();break;
            case 2:q.moveTo(75,375);
                q.lineTo(75,50);
                q.stroke();break;
            case 3:q.lineTo(225,50);
                q.stroke();break;
            case 4:q.lineTo(225,100);
                q.stroke();break;
            case 5:q.beginPath();
                q.arc(225,120,20,0,2*Math.PI);
                q.stroke();break;
            case 6:q.moveTo(225,240);
                q.lineTo(225,140);
                q.stroke();break;
            case 7:q.lineTo(180,190);
                q.stroke();break;
            case 8:q.moveTo(220,140)
                q.lineTo(275,190);
                q.stroke();break;
            case 9:q.moveTo(225,240);
                q.lineTo(190,325);
                q.stroke();break;
            case 10:q.moveTo(225,240);
                q.lineTo(260,325);
                q.stroke();break;
        }
    }
}