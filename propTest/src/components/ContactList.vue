<template>
    <div>
        <table id="list">
            <thead>
                <tr>
                    <th>번호</th><th>이름</th><th>전화번호</th><th>주소</th>
                </tr>
            </thead>
            <tbody id="contacts">
                <tr v-for="contact in contacts" :key="contact.no">
                    <td>{{contact.no}}</td>
                    <td>{{contact.name}}</td>
                    <td>{{contact.tel}}</td>
                    <td>{{contact.address}}</td>
                </tr>
            </tbody>

        </table>
    </div>
</template>
<script>
export default{
    props:['contacts']
}
</script>