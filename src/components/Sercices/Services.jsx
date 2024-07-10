import React from 'react';
import PropTypes from 'prop-types';
import { Container, Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { orange } from '@mui/material/colors';

const services = [
    "Купля-продажа квартир, домов, участков;",
    "Обмен квартир, поиск вариантов;",
    "Аренда жилой и коммерческой недвижимости",
    "Продажа коммерческой недвижимости",
    "Открытие наследственного дела по закону",
    "Открытие наследственного дела по завещанию",
    "Выделение долей наследников",
    "Восстановление утерянных документов",
    "Поиск и получения дубликатов: (архивные справки, актовые записи)",
    "Государственная регистрация объекта недвижимости (переоформление)",
    "Наша организация гарантирует Вам; конфиденциальность, порядочность и качество выполнения услуг!",
    "Услуги лицензированы✅",
    "Форма оплата любая!",
    "Обращайтесь к профессионалам!"
];
const colors = [
    orange,
    '#ffcc00',
    '#ff9900',
    '#ff6600',
    '#ff3300',
    '#ff0000',
    '#cc0000',
    '#990000',
    '#660000',
    '#330000'
];
const Services = () => {
    return (
        <Container sx={{ padding: '20px' }}>
            <Typography variant="h1" component="h1" fontSize={100} color="orange" borderBottom={1} gutterBottom>
                Услуги
            </Typography>
            <Box sx={{ marginBottom: '20px', color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
                Ведущее агентство недвижимости Самарканда и Самаркандской области
                ООО «Самарканд Али Фартуна» предлагает Вам свои
                следующие услуги жителям нашей области👇
            </Box>
            {services.map((service, index) => (
                <Card key={index} sx={{ marginBottom: '10px', borderRadius: '15px', backgroundColor: 'black' }}>
                    <CardContent>
                        <Typography variant="body1" color="orange" textAlign={'center'}>
                            {service}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
            <CardMedia
                component="img"
                image="logo.png"
                alt="Company Logo"
                sx={{ display: 'block', margin: '20px auto', maxWidth: '100px' }}
            />
        </Container>
    );
};

Services.propTypes = {};

export default Services;