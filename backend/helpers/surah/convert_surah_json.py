'''convert surah.json from quranjson project
https://github.com/semarketir/quranjson/blob/master/source/surah.json
to django fixtures file'''

import json
from os import path


def main():
    fixture_dir = path.abspath(
        path.join(path.dirname(__file__), '../../quran/fixtures'))
    fixture_filename = 'surah_list.json'
    fixture_file = path.join(fixture_dir, fixture_filename)

    with open('surah.json', encoding='utf-8') as data_file:
        data = json.load(data_file)

    surah_data = [
        {
            "model": "quran.Surah",
            "fields": {
                "number": int(surah['index']),
                "name": surah['title'],
                "total_ayahs": surah['count']}
        }
        for surah in data]

    with open(fixture_file, 'w') as fp:
        json.dump(surah_data, fp, sort_keys=True, indent=4)

if __name__ == "__main__":
    main()
