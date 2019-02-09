 <template>
    <!-- creat form with el-form tag and add a model and rules -->
    <el-form :model="form" ref="form" class="form" :rules="rules" >
        <!-- creat a el-form-item to hold all el-input data. creat a lable and add a prop for the form rules data -->
        <el-form-item prop="first" label="First Name" >
            <!-- creat an el-input for each field with a placeholder value and assign a uneque v-model to store inputed data -->
            <el-input placeholder="Please enter your name" v-model="form.first"></el-input>
        </el-form-item>
        <el-form-item label="Last Name" prop="last">
            <el-input placeholder="Please enter your last name" v-model="form.last"></el-input>
        </el-form-item>
        <el-form-item label="Email" prop="email">
            <el-input placeholder="Please enter your email" v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="Subject" prop="subject">
            <el-input placeholder="Please enter your subject" v-model="form.subject"></el-input>
        </el-form-item>
            <el-form-item label="Message" prop="message">
            <el-input placeholder="Please write your message" type="textarea" v-model="form.message"></el-input>
        </el-form-item>
        <el-form-item label="All info is correct" prop="check">
            <!-- creat an check box with a v-model to check on submit -->
            <el-checkbox-group v-model="form.check">
                <!-- check box -->
                <el-checkbox label="Agree" name="type"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item>
            <!-- creat a el-buttom to call the submit function on click -->
            <el-button type="primary" @click="submit('form')">Submit</el-button>
            <!-- submit function will check if form is valid -->
        </el-form-item>

        <!-- creat a warning dialog box to conferm the entered data is correct -->
        <el-dialog title="Is all information correct?" :visible.sync="form.DialogVisible" width="30%" center>
            <!-- form message will display all v-model data to the user -->
            <span>Name:<br>{{form.first}} {{form.last}}<br><br> Email Address:<br>{{form.email}} <br><br>
                    <hr><br>Subject: {{form.subject}}<br><br>Message:<br>{{form.message}}
            </span>
            <span slot="footer" class="dialog-footer">
                    <!-- the cancel button will hide the dialog box from the user -->
                    <el-button @click="form.DialogVisible = false">Cancel</el-button>
                    <!-- the submit button will call the reset function which will hide the dialog box and reset all form fields -->
                    <el-button type="primary" @click="reset('form')">Confirm</el-button>
            </span>
        </el-dialog>
    </el-form>
</template>
<script src="./requestForm.js"></script>
<style src="./requestForm.css" scoped></style>

