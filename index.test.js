const {sequelize} = require('./db')
const {Collector, Deck} = require('./models/index')
const {
    seedCollector,
    seedDeck,
  } = require('./seedData');

describe('Collector and Deck Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });

    test('can create a Collector', async () => {
        const testCollector = await Collector.create(seedCollector[0])
        expect(testCollector.name).toBe(seedCollector[0].name)
    });

    test('can create a Deck', async () => {
        const testDeck = await Deck.create(seedDeck[0])
        expect(testDeck.title).toBe(seedDeck[0].title)
    });

    test('can find Collectors', async () => {
        const foundCollector = await Collector.findAll();
        expect(foundCollector.length).toBe(1);
        expect(foundCollector[0].name).toBe(seedCollector[0].name);
    });

    test('can find Decks', async () => {
        const foundDeck = await Deck.findAll();
        expect(foundDeck.length).toBe(1);
        expect(foundDeck[0].title).toBe(seedDeck[0].title);
    });

    /*
         cruD - test Update
    */
    test("can change a Collector's budget", async () => {
        const collector = await Collector.create(seedCollector[1]);
        expect(collector.budget).toBe(seedCollector[1].budget);
        await Collector.update(
            { budget : 30 },
            { where: { name: seedCollector[1].name} }    
        )
        const [ updatedCollector ] = await Collector.findAll(
            {where: {name: seedCollector[1].name}}
        );
        expect(updatedCollector.budget).toBe(30);
    });
    
    test('can delete Collectors', async () => {
        const foundDeck = await Deck.findAll();
        const deletedDeck = await foundDeck[0].destroy();
        expect(deletedDeck.title).toBe(seedDeck[0].title);
    });
})