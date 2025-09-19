const bulan = ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"];
    const colors = ["#ff6384","#36a2eb","#ffcd56","#4bc0c0","#9966ff","#ff9f40","#a8d5ba"];

    function chartTextColor() {
      return document.body.classList.contains("dark") ? "#e0e0e0" : "#333";
    }

    function createGradient(ctx, color) {
      const gradient = ctx.createLinearGradient(0, 0, 0, 300);
      gradient.addColorStop(0, color + "cc");
      gradient.addColorStop(1, color + "22");
      return gradient;
    }

    function commonOptions() {
      return {
        plugins: { legend: { labels: { color: chartTextColor() } } },
        scales: {
          x: { ticks: { color: chartTextColor() }, grid: { color: "rgba(200,200,200,0.1)" } },
          y: { ticks: { color: chartTextColor() }, grid: { color: "rgba(200,200,200,0.1)" } }
        }
      };
    }

    // Chart Instances
    const ctx1 = document.getElementById("chart1").getContext("2d");
    new Chart(ctx1, {
      type: "bar",
      data: { labels: bulan, datasets: [{ label: "Unit 🛒", data: [120,150,180,100,200,250,220,300,280,350,400,380], backgroundColor: createGradient(ctx1,"#36a2eb") }] },
      options: commonOptions()
    });

    const ctx2 = document.getElementById("chart2").getContext("2d");
    new Chart(ctx2, {
      type: "pie",
      data: { labels: ["Elektronik ⚡","Fashion 👗","Makanan 🍔","Lainnya 📦"], datasets: [{ data: [300,200,150,100], backgroundColor: colors }] },
      options: commonOptions()
    });

    const ctx3 = document.getElementById("chart3").getContext("2d");
    new Chart(ctx3, {
      type: "line",
      data: { labels: ["Sen","Sel","Rab","Kam","Jum","Sab","Min"], datasets: [{ label: "Pendapatan 💵", data: [2,3,2.5,4,3.5,5,4.5], borderColor: "#ffcd56", backgroundColor: createGradient(ctx3,"#ffcd56"), fill: true, tension: 0.4 }]},
      options: commonOptions()
    });

    const ctx4 = document.getElementById("chart4").getContext("2d");
    new Chart(ctx4, {
      type: "doughnut",
      data: { labels: ["Retur 🔄","Tidak Retur ✅"], datasets: [{ data: [50,450], backgroundColor: ["#ff6384","#36a2eb"] }]},
      options: commonOptions()
    });

    const ctx5 = document.getElementById("chart5").getContext("2d");
    new Chart(ctx5, {
      type: "radar",
      data: { labels: ["Jan","Feb","Mar","Apr","Mei","Jun"], datasets: [
        { label: "Baru 🆕", data: [20,25,30,22,35,40], borderColor: "#36a2eb", backgroundColor: "rgba(54,162,235,0.3)" },
        { label: "Lama 🧑‍🤝‍🧑", data: [40,35,30,28,25,20], borderColor: "#ff6384", backgroundColor: "rgba(255,99,132,0.3)" }
      ]},
      options: commonOptions()
    });

    const ctx6 = document.getElementById("chart6").getContext("2d");
    new Chart(ctx6, {
      type: "polarArea",
      data: { labels: ["⭐1","⭐2","⭐3","⭐4","⭐5"], datasets: [{ data: [10,20,30,50,90], backgroundColor: colors }]},
      options: commonOptions()
    });

    const ctx7 = document.getElementById("chart7").getContext("2d");
    new Chart(ctx7, {
      type: "line",
      data: { labels: ["Sen","Sel","Rab","Kam","Jum","Sab","Min"], datasets: [
        { label: "Desktop 🖥️", data: [120,150,170,200,220,250,270], borderColor: "#36a2eb", backgroundColor: createGradient(ctx7,"#36a2eb"), fill:true, tension:0.4 },
        { label: "Mobile 📱", data: [80,100,130,160,180,200,230], borderColor: "#ff6384", backgroundColor: createGradient(ctx7,"#ff6384"), fill:true, tension:0.4 }
      ]},
      options: commonOptions()
    });

    // Toggle Mode Gelap
    document.querySelector(".dark-mode-toggle").addEventListener("click", () => {
      document.body.classList.toggle("dark");
      Chart.helpers.each(Chart.instances, function(chart) {
        chart.options = commonOptions();
        chart.update();
      });
    });