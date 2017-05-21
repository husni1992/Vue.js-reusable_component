var card = new Vue({
    el: '#card',
    data: {
        title: 'Cars available in stock',
        cars: [
            { name: 'Bugati', speed: 387, quantity: 4 },
            { name: 'Lambogini', speed: 290, quantity: 7 },
            { name: 'Ferari', speed: 297, quantity: 12 },
            { name: 'Volks Wagon', speed: 285, quantity: 2 }
        ],
        total: null
    },
    methods: {
        incrementTotal: function (amount) {
            this.total += amount;
        }
    },
    components: {
        'car-counter': {
            template: '#car-counter',
            props: ['name', 'initialQuantity'],
            data: function () {
                this.$emit('increment', this.initialQuantity);
                return {
                    quantity: this.initialQuantity
                }
            },
            methods: {
                increment: function () {
                    this.quantity += 1;
                    this.$emit('increment', 1)
                }
            }
        }
    }
})