const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
    it("returns ['there', 'stranger'] for ['hey', 'there', 'stranger']", () => {
      assert.deepEqual(tail(["hey","there", "stranger"]), ["there","stranger"]);
    });

    it("returns [2, 3] for [1, 2, 3]", () => {
        assert.deepEqual(tail([1, 2, 3]), [2, 3]);
    })
  });
