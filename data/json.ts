export default {
    "id": "12345678901234567890123456789012abcdef",
    "last_name": "Фамилия",
    "first_name": "Имя",
    "middle_name": "Отчество",
    "age": 36,
    "birth_date": "1980-05-08",
    "gender": {
        "id": "male",
        "name": "Мужской"
    },
    "area": {
        "url": "https://api.hh.ru/areas/1",
        "id": "1",
        "name": "Москва"
    },
    "metro": {
        "lat": 55.658147,
        "lng": 37.540957,
        "order": 19,
        "id": "6.41",
        "name": "Калужская"
    },
    "relocation": {
        "type": {
            "id": "relocation_possible",
            "name": "готов к переезду"
        },
        "area": [
            {
                "url": "https://api.hh.ru/areas/2",
                "id": "2",
                "name": "Санкт-Петербург"
            },
            {
                "url": "https://api.hh.ru/areas/76",
                "id": "76",
                "name": "Ростов-на-Дону"
            }
        ]
    },
    "business_trip_readiness": {
        "id": "ready",
        "name": "Готов к командировкам"
    },
    "contact": [
        {
            "verified": true,
            "comment": null,
            "type": {
                "id": "cell",
                "name": "Мобильный телефон"
            },
            "preferred": true,
            "value": {
                "country": "7",
                "city": "123",
                "number": "4567890",
                "formatted": "+71234567890"
            }
        },
        {
            "type": {
                "id": "email",
                "name": "Эл. почта"
            },
            "preferred": false,
            "value": "applicant@example.com"
        }
    ],
    "site": [
        {
            "url": "echo123",
            "type": {
                "id": "skype",
                "name": "Skype"
            }
        },
        {
            "url": "123456",
            "type": {
                "id": "icq",
                "name": "ICQ"
            }
        }
    ],
    "title": "Программист Python",
    "photo": {
        "small": "https://hh.ru/...",
        "medium": "https://hh.ru/...",
        "id": "1337"
    },
    "portfolio": [
        {
            "small": "https://hh.ru/...",
            "medium": "https://hh.ru/...",
            "id": "1337",
            "description": "..."
        }
    ],
    "specialization": [
        {
            "id": "1.221",
            "name": "Программирование, Разработка",
            "profarea_id": "1",
            "profarea_name": "Информационные технологии, интернет, телеком",
            "laboring": false
        },
        {
            "id": "1.89",
            "name": "Интернет",
            "profarea_id": "1",
            "profarea_name": "Информационные технологии, интернет, телеком",
            "laboring": false
        },
        {
            "id": "1.9",
            "name": "Web инженер",
            "profarea_id": "1",
            "profarea_name": "Информационные технологии, интернет, телеком",
            "laboring": false
        }
    ],
    "salary": {
        "amount": 100500,
        "currency": "RUR"
    },
    "employments": [
        {
            "id": "full",
            "name": "Полная занятость"
        },
        {
            "id": "part",
            "name": "Частичная занятость"
        }
    ],
    "schedules": [
        {
            "id": "fullDay",
            "name": "Полный день"
        },
        {
            "id": "flexible",
            "name": "Гибкий график"
        }
    ],
    "education": {
        "elementary": [
            {
                "name": "Школа №1923",
                "year": 2003
            }
        ],
        "additional": [
            {
                "name": "Курс повышения квалификации",
                "organization": "Проводившая организация",
                "result": "Специализация",
                "year": 2006
            }
        ],
        "attestation": [
            {
                "name": "Тест на IQ",
                "organization": "IQ центр",
                "result": "Интеллект квалификейшн",
                "year": 2005
            }
        ],
        "primary": [
            {
                "name": "Московская государственная академия ветеринарной медицины и биотехнологии имени К.И. Скрябина, Москва",
                "name_id": "39464",
                "organization": "Факультет зоотехнологий и агробизнеса",
                "organization_id": "25181",
                "result": "Социальная психология",
                "result_id": null,
                "year": 2000
            }
        ],
        "level": {
            "id": "higher",
            "name": "Высшее"
        }
    },
    "language": [
        {
            "id": "rus",
            "name": "Русский",
            "level": {
                "id": "native",
                "name": "родной"
            }
        },
        {
            "id": "eng",
            "name": "Английский",
            "level": {
                "id": "b2",
                "name": "B2 — Средне-продвинутый"
            }
        }
    ],
    "experience": [
        {
            "company": "Название работодателя",
            "company_id": null,
            "area": {
                "url": "https://api.hh.ru/areas/113",
                "id": "113",
                "name": "Россия"
            },
            "company_url": "http://www.rbc.ru",
            "industries": [
                {
                    "id": "7.540",
                    "name": "Разработка программного обеспечения"
                },
                {
                    "id": "9.399",
                    "name": "Мобильная связь"
                }
            ],
            "position": "Должность",
            "start": "2005-04-01",
            "end": "2013-01-01",
            "description": "Описание деятельности в компании"
        }
    ],
    "total_experience": {
        "months": 94
    },
    "skills": "Дополнительная информация: ключевые навыки",
    "skill_set": [
        "HTML",
        "CSS"
    ],
    "citizenship": [
        {
            "url": "https://api.hh.ru/areas/113",
            "id": "113",
            "name": "Россия"
        }
    ],
    "work_ticket": [
        {
            "url": "https://api.hh.ru/areas/113",
            "id": "113",
            "name": "Россия"
        }
    ],
    "travel_time": {
        "id": "any",
        "name": "Не имеет значения"
    },
    "recommendation": [
        {
            "name": "Петров Петр",
            "position": "старший научный сотрудник",
            "organization": "Роскосмос"
        }
    ],
    "resume_locale": {
        "id": "RU",
        "name": "Русский"
    },
    "certificate": [
        {
            "title": "Oracle Certified Java Professional Programmer",
            "achieved_at": "2013-01-01",
            "type": "custom",
            "owner": null,
            "url": "https://example.com/certificate/123456"
        },
        {
            "title": "MCSE: Windows NT 4.0",
            "achieved_at": "1998-01-26",
            "owner": "JOHN DOE",
            "type": "microsoft",
            "url": null
        },
    ],
    "alternate_url": "https://hh.ru/resume/12345678901234567890123456789012abcdef",
    "created_at": "2013-05-31T14:27:04+0400",
    "updated_at": "2013-10-17T15:22:55+0400",
    "download": {
        "pdf": {
            "url": "https://hh.ru/api_resume_converter/12345678901234567890123456789012abcdef/ФамилияИмяОтчество.pdf?type=pdf"
        },
        "rtf": {
            "url": "https://hh.ru/api_resume_converter/12345678901234567890123456789012abcdef/ФамилияИмяОтчество.rtf?type=rtf"
        }
    },
    "actions": {
        "download": {
            "pdf": {
                "url": "https://hh.ru/api_resume_converter/12345678901234567890123456789012abcdef/ФамилияИмяОтчество.pdf?type=pdf"
            },
            "rtf": {
                "url": "https://hh.ru/api_resume_converter/12345678901234567890123456789012abcdef/ФамилияИмяОтчество.rtf?type=rtf"
            }
        }
    },
    "has_vehicle": true,
    "driver_license_types": [
        {
            "id": "A"
        },
        {
            "id": "B"
        }
    ],
    "hidden_fields": [
        {
            "id": "phones",
            "name": "Все указанные в резюме телефоны"
        }
    ],
    "marked": false
}
