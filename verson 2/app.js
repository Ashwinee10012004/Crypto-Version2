// Cryptocurrency Forecast Dashboard Application
class CryptoForecastDashboard {
    constructor() {
        // Cryptocurrency data from the provided JSON
        this.cryptoData = {
            "BTC": {
                "name": "Bitcoin",
                "symbol": "BTC", 
                "data": [{"ds":"2025-08-09T00:00:00.000","yhat":107227.6327655456},{"ds":"2025-08-10T00:00:00.000","yhat":107268.7386891655},{"ds":"2025-08-11T00:00:00.000","yhat":107313.034750321},{"ds":"2025-08-12T00:00:00.000","yhat":107420.4197851771},{"ds":"2025-08-13T00:00:00.000","yhat":107448.6591905415},{"ds":"2025-08-14T00:00:00.000","yhat":107584.0020188606},{"ds":"2025-08-15T00:00:00.000","yhat":107572.7304325755}],
                "current_price": 107227.63
            },
            "ETH": {
                "name": "Ethereum",
                "symbol": "ETH",
                "data": [{"ds":"2025-08-09T00:00:00.000","yhat":3062.6010640787},{"ds":"2025-08-10T00:00:00.000","yhat":3062.4501449242},{"ds":"2025-08-11T00:00:00.000","yhat":3061.4276760912},{"ds":"2025-08-12T00:00:00.000","yhat":3061.5076691885},{"ds":"2025-08-13T00:00:00.000","yhat":3056.8896295236},{"ds":"2025-08-14T00:00:00.000","yhat":3059.1890121718},{"ds":"2025-08-15T00:00:00.000","yhat":3055.7955556912}],
                "current_price": 3062.60
            },
            "DOGE": {
                "name": "Dogecoin", 
                "symbol": "DOGE",
                "data": [{"ds":"2025-08-09T00:00:00.000","yhat":0.2411475515},{"ds":"2025-08-10T00:00:00.000","yhat":0.2418425341},{"ds":"2025-08-11T00:00:00.000","yhat":0.2424994612},{"ds":"2025-08-12T00:00:00.000","yhat":0.2428435555},{"ds":"2025-08-13T00:00:00.000","yhat":0.243375552},{"ds":"2025-08-14T00:00:00.000","yhat":0.2442734268},{"ds":"2025-08-15T00:00:00.000","yhat":0.2448089281}],
                "current_price": 0.24
            },
            "GOLD": {
                "name": "Gold",
                "symbol": "GOLD",
                "data": [{"ds":"2025-08-09T00:00:00.000","yhat":83155.1218602679},{"ds":"2025-08-10T00:00:00.000","yhat":83146.1431563555},{"ds":"2025-08-11T00:00:00.000","yhat":83231.7849610329},{"ds":"2025-08-12T00:00:00.000","yhat":83249.4065334721},{"ds":"2025-08-13T00:00:00.000","yhat":83273.2843494916},{"ds":"2025-08-14T00:00:00.000","yhat":83309.9239946405},{"ds":"2025-08-15T00:00:00.000","yhat":83361.6844124788}],
                "current_price": 83155.12
            }
        };

        this.chart = null;
        this.currentCrypto = 'BTC';
        this.currentData = [];

        // Chart colors for different cryptocurrencies
        this.chartColors = {
            'BTC': '#1FB8CD',
            'ETH': '#FFC185', 
            'DOGE': '#B4413C',
            'GOLD': '#ECEBD5'
        };

        this.init();
    }

    init() {
        this.setDateConstraints();
        this.bindEvents();
        this.updateForecast();
    }

    bindEvents() {
        const cryptoSelect = document.getElementById('crypto-select');
        const startDate = document.getElementById('start-date');
        const endDate = document.getElementById('end-date');
        const forecastBtn = document.getElementById('forecast-btn');

        // Bind cryptocurrency selection change with proper persistence
        cryptoSelect.addEventListener('change', (e) => {
            this.currentCrypto = e.target.value;
            console.log('Crypto changed to:', this.currentCrypto); // Debug log
            this.updateForecast();
        });

        // Bind date input changes with validation
        startDate.addEventListener('change', () => {
            this.validateDateRange();
            this.updateForecast();
        });

        endDate.addEventListener('change', () => {
            this.validateDateRange();
            this.updateForecast();
        });

        // Bind forecast button click
        forecastBtn.addEventListener('click', () => {
            this.generateForecast();
        });
    }

    setDateConstraints() {
        const startDate = document.getElementById('start-date');
        const endDate = document.getElementById('end-date');
        
        // Set min/max dates based on available data
        startDate.min = '2025-08-09';
        startDate.max = '2025-08-15';
        endDate.min = '2025-08-09';
        endDate.max = '2025-08-15';
        
        // Ensure default values are set
        if (!startDate.value) startDate.value = '2025-08-09';
        if (!endDate.value) endDate.value = '2025-08-15';
    }

    validateDateRange() {
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        const forecastBtn = document.getElementById('forecast-btn');

        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            
            if (start >= end) {
                forecastBtn.disabled = true;
                this.showError('End date must be after start date');
                return false;
            } else {
                forecastBtn.disabled = false;
            }
        }
        return true;
    }

    async generateForecast() {
        if (!this.validateDateRange()) return;

        // Preserve the current crypto selection
        const cryptoSelect = document.getElementById('crypto-select');
        this.currentCrypto = cryptoSelect.value;

        this.showLoadingState();
        
        try {
            // Simulate processing time with visible loading
            await this.delay(2000);
            
            this.updateForecast();
            this.animateResults();
            
        } catch (error) {
            console.error('Error generating forecast:', error);
            this.showError('Failed to generate forecast');
        } finally {
            this.hideLoadingState();
        }
    }

    updateForecast() {
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        
        // Ensure we have valid dates
        if (!startDate || !endDate) {
            this.setDateConstraints();
            return;
        }

        // Filter data based on selected date range
        const filteredData = this.filterDataByDateRange(startDate, endDate);
        this.currentData = filteredData;
        
        // Update all dashboard components
        this.updateMetricCards(filteredData);
        this.updateChart(filteredData);

        // Ensure the crypto selector shows the correct value
        const cryptoSelect = document.getElementById('crypto-select');
        if (cryptoSelect.value !== this.currentCrypto) {
            cryptoSelect.value = this.currentCrypto;
        }
    }

    filterDataByDateRange(startDate, endDate) {
        const cryptoInfo = this.cryptoData[this.currentCrypto];
        if (!cryptoInfo) return [];

        return cryptoInfo.data.filter(item => {
            const itemDate = item.ds.split('T')[0]; // Get YYYY-MM-DD format
            return itemDate >= startDate && itemDate <= endDate;
        });
    }

    updateMetricCards(data) {
        const cryptoInfo = this.cryptoData[this.currentCrypto];
        const currentPriceEl = document.getElementById('current-price');
        const predictedPriceEl = document.getElementById('predicted-price');
        const forecastChangeEl = document.getElementById('forecast-change');
        const forecastPeriodEl = document.getElementById('forecast-period');

        if (data.length === 0) {
            currentPriceEl.textContent = 'No data';
            predictedPriceEl.textContent = 'No data';
            forecastChangeEl.textContent = 'No data';
            forecastPeriodEl.textContent = 'No data';
            return;
        }

        // Current price (first data point)
        const currentPrice = cryptoInfo.current_price;
        const predictedPrice = data[data.length - 1].yhat; // Last prediction
        
        // Calculate forecast change percentage
        const changePercent = ((predictedPrice - currentPrice) / currentPrice) * 100;
        
        // Calculate forecast period
        const startDate = new Date(data[0].ds);
        const endDate = new Date(data[data.length - 1].ds);
        const daysDiff = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;

        // Update the DOM
        currentPriceEl.textContent = this.formatPrice(currentPrice);
        predictedPriceEl.textContent = this.formatPrice(predictedPrice);
        
        // Update forecast change with appropriate styling
        const changeText = `${changePercent >= 0 ? '+' : ''}${changePercent.toFixed(2)}%`;
        forecastChangeEl.textContent = changeText;
        forecastChangeEl.className = `metric-value ${changePercent >= 0 ? 'forecast-positive' : 'forecast-negative'}`;
        
        forecastPeriodEl.textContent = `${daysDiff} day${daysDiff > 1 ? 's' : ''}`;

        // Add animation class
        [currentPriceEl, predictedPriceEl, forecastChangeEl, forecastPeriodEl].forEach(el => {
            el.classList.remove('fade-in');
            el.offsetHeight; // Force reflow
            el.classList.add('fade-in');
        });
    }

    updateChart(data) {
        const ctx = document.getElementById('price-chart').getContext('2d');
        const cryptoInfo = this.cryptoData[this.currentCrypto];
        
        // Destroy existing chart
        if (this.chart) {
            this.chart.destroy();
        }

        if (data.length === 0) {
            return;
        }

        // Prepare chart data
        const labels = data.map(item => {
            const date = new Date(item.ds);
            return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        });

        const prices = data.map(item => item.yhat);
        const color = this.chartColors[this.currentCrypto];

        const chartData = {
            labels: labels,
            datasets: [{
                label: `${cryptoInfo.name} Price Forecast`,
                data: prices,
                borderColor: color,
                backgroundColor: this.hexToRgba(color, 0.1),
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 6,
                pointHoverRadius: 10,
                pointBackgroundColor: color,
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointHoverBackgroundColor: color,
                pointHoverBorderColor: '#ffffff',
                pointHoverBorderWidth: 3
            }]
        };

        const chartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index'
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: '#e2e8f0',
                        font: {
                            size: 14,
                            weight: '500'
                        },
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    enabled: true,
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    borderColor: color,
                    borderWidth: 2,
                    cornerRadius: 12,
                    displayColors: true,
                    titleFont: {
                        size: 14,
                        weight: 'bold'
                    },
                    bodyFont: {
                        size: 13,
                        weight: '500'
                    },
                    padding: 12,
                    callbacks: {
                        title: (context) => {
                            const dataIndex = context[0].dataIndex;
                            const date = new Date(data[dataIndex].ds);
                            return date.toLocaleDateString('en-US', { 
                                weekday: 'long', 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                            });
                        },
                        label: (context) => {
                            return `💰 Price: ${this.formatPrice(context.parsed.y)}`;
                        },
                        afterLabel: (context) => {
                            return `📊 ${cryptoInfo.name} (${cryptoInfo.symbol})`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    grid: {
                        color: 'rgba(148, 163, 184, 0.1)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#94a3b8',
                        font: {
                            size: 12
                        },
                        callback: (value) => this.formatPrice(value, true)
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(148, 163, 184, 0.1)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#94a3b8',
                        font: {
                            size: 12
                        }
                    }
                }
            },
            elements: {
                line: {
                    borderCapStyle: 'round',
                    borderJoinStyle: 'round'
                },
                point: {
                    hoverRadius: 10
                }
            },
            onHover: (event, activeElements) => {
                event.native.target.style.cursor = activeElements.length > 0 ? 'pointer' : 'default';
            }
        };

        // Create new chart
        this.chart = new Chart(ctx, {
            type: 'line',
            data: chartData,
            options: chartOptions
        });
    }

    formatPrice(price, compact = false) {
        const symbol = this.currentCrypto;
        let currency = '$';
        let decimals = 2;

        if (symbol === 'DOGE') {
            decimals = 4;
        } else if (symbol === 'GOLD') {
            currency = '₹';
            decimals = 0;
        }

        const formatter = new Intl.NumberFormat('en-US', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
            notation: compact && price > 1000 ? 'compact' : 'standard'
        });

        return `${currency}${formatter.format(price)}`;
    }

    hexToRgba(hex, alpha) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    showLoadingState() {
        const btn = document.getElementById('forecast-btn');
        const overlay = document.getElementById('loading-overlay');
        
        btn.classList.add('btn--loading');
        btn.disabled = true;
        overlay.classList.remove('hidden');
        
        // Add pulsing effect to button
        btn.style.animation = 'pulse 1.5s infinite';
    }

    hideLoadingState() {
        const btn = document.getElementById('forecast-btn');
        const overlay = document.getElementById('loading-overlay');
        
        btn.classList.remove('btn--loading');
        btn.disabled = false;
        overlay.classList.add('hidden');
        
        // Remove pulsing effect
        btn.style.animation = '';
    }

    animateResults() {
        const elements = document.querySelectorAll('.metric-card, .chart-section');
        
        elements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.1}s`;
            element.classList.remove('slide-up');
            // Force reflow
            element.offsetHeight;
            element.classList.add('slide-up');
        });
    }

    showError(message) {
        // Create a simple toast notification
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #f87171, #ef4444);
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            font-weight: 500;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4);
            z-index: 1001;
            animation: slideInRight 0.3s ease-out;
            max-width: 300px;
        `;
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideOutRight 0.3s ease-in forwards';
            setTimeout(() => {
                if (document.body.contains(toast)) {
                    document.body.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Add additional animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
    
    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.7;
        }
    }
`;
document.head.appendChild(style);

// Initialize the dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CryptoForecastDashboard();
});