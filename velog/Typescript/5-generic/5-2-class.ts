{
    interface Either<L,R>{
          left: () => L;
          right: () => R;
    }

    class SimpleEither<L,R> implements Either<L, R>{
        constructor(private leftValue:L, private rightValue:R) {}
        left(): L {return this.leftValue;}
        right(): R {return this.rightValue;}
    }

    const best = new SimpleEither(3,{K:1});


    interface Either1<U,D>{
        up:()=>U;
        down:()=>D;
    }

    class UpDown<U,D> implements Either1<U, D>{
        constructor(private upValue:U,private downValue:D) {}
        up(): U {return this.upValue;}
        down(): D {return this.downValue;}
    }
    

}