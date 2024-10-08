class HashMap{
    constructor(size = 16){
        this.buckets = new Array(size);
        this.size = size;
        this.hashSize = 0;
    }

    hash(key){
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.size;
        }

        return hashCode;
    }

    set(key, value){
        let index = this.hash(key);

        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }

        this.buckets[index].push([key, value]);
        this.hashSize++;
    }

    get(key){
        let index = this.hash(key);

        if (!this.buckets[index]) return null;

        for (let bucket of this.buckets[index]){
            if (bucket [0] === key) {
                return bucket [1];
            }
        }
    }

    has(key){
        let index = this.hash(key);

        if (this.buckets[index]) return true;
        else return false;
    }

    remove(key){
        let index = this.hash(key);

        if (this.has(key) === true) {
            this.buckets[index] = [];
            return true;
        } else {
            return false;
        }
    }

    length(){
        return this.hashSize;
    }
    
    clear(){
        for (let i = 0; i < this.buckets.length; i++){
            this.buckets[i] = [];
        }
        this.hashSize = 0;
    }

    keys(){
        const keys = [];

        for (let i = 0; i <this.buckets.length; i++){
            if (this.buckets[i]){
                for (let j = 0; j < this.buckets[i].length; j++){
                    keys.push(this.buckets[i][j].key);
                }            }
        }
        return keys;
    }

    values(){
        const values = [];

        for (let i = 0; i <this.buckets.length; i++){
            if (this.buckets[i]){
                for (let j = 0; j < this.buckets[i].length; j++){
                    values.push(this.buckets[i][j].value);
                }
            }
        }
        return values;
    }

    entries(){
        const entries = [];

        for (let i = 0; i <this.buckets.length; i++){
            if (this.buckets[i]){
                for (let j = 0; j < this.buckets[i].length; j++){
                    const { key, value } = this.buckets[i][j];
                    entries.push({ key, value });
                }
            }
        }
        return entries;
    }
}

const test = new HashMap();
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

test.set('moon','silver')

console.log(test.entries())